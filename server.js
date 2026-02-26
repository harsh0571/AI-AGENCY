import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());

// Ensure the videos directory exists
const videosDir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, { recursive: true });
}

// Serve the videos directory statically so the frontend can retrieve them via /videos/...
app.use('/videos', express.static(videosDir));

// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, videosDir);
    },
    filename: (req, file, cb) => {
        // req.body might not be fully populated here depending on field order,
        // but we'll try to use it, or fallback to a temp name and rename later.
        // A safer robust way is to use a timestamp or unique ID and let the route handle it.
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExt = path.extname(file.originalname) || '.mp4';
        cb(null, `temp-${uniqueSuffix}${fileExt}`);
    }
});

const upload = multer({ storage });

// API Endpoint to handle video upload
app.post('/api/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No video file provided' });
    }

    const slotId = req.body.slotId || 'unnamed-slot';
    const fileExt = path.extname(req.file.originalname) || '.mp4';

    // Add a timestamp to the filename to avoid Windows EBUSY file-lock errors 
    // when the browser is actively streaming the old video
    const uniqueTime = Date.now();
    const finalFilename = `${slotId}-${uniqueTime}${fileExt}`;
    const finalPath = path.join(videosDir, finalFilename);

    // Rename the uploaded temp file to the new unique name
    try {
        fs.renameSync(req.file.path, finalPath);

        // Optional: clean up older files with the same slotId to save space
        fs.readdirSync(videosDir).forEach(file => {
            if (file.startsWith(`${slotId}-`) && file !== finalFilename) {
                try { fs.unlinkSync(path.join(videosDir, file)); } catch (e) { /* ignore locked files */ }
            }
        });
    } catch (err) {
        console.error('Error renaming file:', err);
        return res.status(500).json({ error: 'Failed to save video file' });
    }

    // Return the relative URL so the frontend can display it
    const relativeUrl = `/videos/${finalFilename}`;

    res.json({
        success: true,
        message: 'Video uploaded successfully',
        url: relativeUrl,
        slotId: slotId
    });
});

app.listen(PORT, () => {
    console.log(`Upload server running on http://localhost:${PORT}`);
});
