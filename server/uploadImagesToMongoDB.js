import { MongoClient, GridFSBucket } from "mongodb";
import express from "express";
import cors from "cors";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const url = "mongodb://localhost:27017";
const dbName = "OSISWomenClothings";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    console.log("Connected to MongoDB");
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);

    // Function to upload images from server/image folder
    const uploadImagesFromFolder = (folderPath, category) => {
      const files = fs.readdirSync(folderPath); // Get all files in the folder
      files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const fileName = file; // Get the original filename

        // Open an upload stream to GridFS with metadata
        const uploadStream = bucket.openUploadStream(fileName, {
          metadata: { category } // Store category as metadata
        });

        // Read the file and pipe it to the upload stream
        fs.createReadStream(filePath)
          .pipe(uploadStream)
          .on('error', (err) => {
            console.error('Error uploading file:', err);
          })
          .on('finish', () => {
            console.log(`File ${fileName} uploaded successfully in category ${category}`);
          });
      });
    };

    // Route to trigger the image upload process
    app.post('/api/upload-images', (req, res) => {
      const imageDir = path.join(__dirname, 'images'); // Root directory for images

      // Get all subfolders (each subfolder is treated as a category)
      const categories = fs.readdirSync(imageDir);
      
      categories.forEach(category => {
        const categoryPath = path.join(imageDir, category);
        
        // Check if it's a folder, then upload images
        if (fs.lstatSync(categoryPath).isDirectory()) {
          uploadImagesFromFolder(categoryPath, category);
        }
      });

      res.status(200).json({ message: "Images uploaded successfully" });
    });

    // Route to fetch images by category from MongoDB
    app.get('/api/images/:category', (req, res) => {
      const { category } = req.params;
      const filesCursor = db.collection('fs.files').find({ 'metadata.category': category });

      filesCursor.toArray((err, files) => {
        if (err) {
          return res.status(500).json({ message: 'Failed to fetch images' });
        }
        
        if (!files || files.length === 0) {
          return res.status(404).json({ message: 'No images found for this category' });
        }

        // Return file metadata, e.g., file names and other details
        const fileInfos = files.map(file => ({
          filename: file.filename,
          id: file._id
        }));
        console.log(fileInfos)

        res.status(200).json(fileInfos);
      });
    });

    // Route to download a specific image by its ID
    app.get('/api/images/download/:id', (req, res) => {
      const { id } = req.params;

      try {
        const downloadStream = bucket.openDownloadStreamByName(id);
        
        downloadStream.on('error', () => {
          res.status(404).json({ message: 'Image not found' });
        });

        downloadStream.pipe(res);
      } catch (err) {
        console.error('Error downloading image:', err);
        res.status(500).json({ message: 'Error downloading image' });
      }
    });

  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
