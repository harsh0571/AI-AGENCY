import express from 'express';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configure Cloudinary using Environment Variables
cloudinary.config({
    cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Multer to use Memory Storage
// This is required for serverless deployments (like Vercel) which do not have a writable file system.
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API Endpoint to handle video upload to Cloudinary
app.post('/api/upload', upload.single('video'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No video file provided' });
    }

    const slotId = req.body.slotId || 'unnamed-slot';

    try {
        // Stream the file buffer directly from memory to Cloudinary
        const uploadResponse = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: 'video',
                    folder: 'marketing-agency-videos', // Cloudinary folder name
                    public_id: `${slotId}-${Date.now()}`, // Ensure a unique filename each time to bypass caching
                    overwrite: true
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            // Write the buffer to the stream
            uploadStream.end(req.file.buffer);
        });

        // Cloudinary returns a global permanent URL (`secure_url`)
        res.json({
            success: true,
            message: 'Video uploaded successfully to Cloudinary',
            url: uploadResponse.secure_url,
            slotId: slotId
        });

    } catch (err) {
        console.error('Error uploading to Cloudinary:', err);
        return res.status(500).json({ error: 'Failed to upload video to cloud' });
    }
});

app.listen(PORT, () => {
    console.log(`Upload server running on http://localhost:${PORT}`);
});
