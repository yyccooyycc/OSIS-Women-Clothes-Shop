import { MongoClient, ObjectId , GridFSBucket } from "mongodb";
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
const randomPrices = [1000, 1350, 2580, 4200]

app.use(cors({ origin: 'http://localhost:3000' }));
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
    app.get("/api/images/:category", async (req, res) => {
      const { category } = req.params;
      console.log(`Fetching images for category: ${category}`);
      try {
        const files = await db
          .collection("fs.files")
          .find({ "metadata.category": category })
          .toArray();

        console.log("Files retrieved from database:", files);

        if (!files || files.length === 0) {
          return res
            .status(404)
            .json({ message: "No images found for this category" });
        }

        const fileInfos = files.map((file) => ({
          filename: file.filename,
          id: file._id,
          url: `/api/images/download/${file._id}`,
          metadata: file.metadata,
          price: `${randomPrices[Math.floor(Math.random() * randomPrices.length)]}`,
        }));

        console.log("File information:", fileInfos);
        res.status(200).json(fileInfos);
      } catch (err) {
        console.error("Error fetching files:", err);
        res.status(500).json({ message: "Failed to fetch images" });
      }
    });

    // Route to download a specific image by its ID
    app.get('/api/images/download/:id', (req, res) => {
      const { id } = req.params;

      try {
        const objectId = new ObjectId(id);  
        const downloadStream = bucket.openDownloadStream(objectId);
        
        downloadStream.on('error', () => {
          console.error('Stream Error:', error);
          res.status(404).json({ message: 'Image not found' });
        });

        res.set('Content-Type', 'image/jpeg');
        downloadStream.pipe(res);
      } catch (err) {
        console.error('Error downloading image:', err);
        res.status(500).json({ message: 'Error downloading image' });
      }
    });

    app.get('/api/search', (req, res) => {
    const { keyword, category } = req.query;
    console.log(`Searching for keyword: ${keyword}, category: ${category}`);
  
    const filter = {};
  
    if (keyword) {
      filter.name = { $regex: keyword, $options: 'i' };
    }
    if (category) {
      filter['metadata.category'] = category;
    }
  
    db.collection('fs.files')
      .find(filter)
      .toArray((err, files) => {
        if (err) {
          console.error('Error fetching search results:', err);
          return res.status(500).json({ message: 'Failed to fetch results' });
        }
  
        const results = files.map(file => ({
          filename: file.filename,
          category: file.metadata.category,
          id: file._id,
        }));
  
        console.log('Search results:', results);
        res.status(200).json(results);
      });
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
