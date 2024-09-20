import { MongoClient, GridFSBucket } from 'mongodb';
import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// MongoDB URL
const url = 'mongodb://localhost:27017';
const dbName = 'mongodb';


const correctedDirname = __dirname.replace(/^\//, '');
const imagesFolder = path.join(correctedDirname, '../../client/src/assets/images');

(async () => {
    const client = await MongoClient.connect(url); 
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);

  try {
    // Read the image files from the folder
    const files = fs.readdirSync(imagesFolder);

    // Create an array of promises for each file upload
    const uploadPromises = files.map(file => {
      const filePath = path.join(imagesFolder, file);

      // Ensure that we're only uploading files (and not directories)
      if (fs.lstatSync(filePath).isFile()) {
        return new Promise((resolve, reject) => {
          const uploadStream = bucket.openUploadStream(file);
          fs.createReadStream(filePath).pipe(uploadStream);

          // Handle finish and error events
          uploadStream.on('finish', () => {
            console.log(`${file} successfully uploaded to MongoDB`);
            resolve();
          });

          uploadStream.on('error', (error) => {
            console.error(`Error uploading ${file}:`, error);
            reject(error);
          });
        });
      } else {
        return Promise.resolve(); // Skip directories
      }
    });

    // Wait for all uploads to finish
    await Promise.all(uploadPromises);
    console.log('All files uploaded successfully.');
  } catch (err) {
    console.error('Error reading files or uploading:', err);
  } finally {
    // Close the MongoDB connection after uploads are done
    client.close();
  }
})();
