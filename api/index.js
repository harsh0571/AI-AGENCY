import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.VITE_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Endpoint to generate a secure signature for direct-to-Cloudinary uploads
app.post('/api/get-signature', async (req, res) => {
    const slotId = req.body.slotId || 'unnamed-slot';
    const timestamp = Math.round((new Date).getTime() / 1000);

    // We want to force a unique public_id so Cloudinary doesn't cache it aggressively
    const publicId = `${slotId}-${Date.now()}`;
    const folder = 'marketing-agency-videos';

    try {
        // Create the signature using our hidden API Secret
        // IMPORTANT: The parameters signed here MUST exactly match the 
        // string parameters sent by the frontend FormData (excluding file & api_key).
        const signature = cloudinary.utils.api_sign_request({
            timestamp: timestamp,
            folder: folder,
            public_id: publicId
        }, process.env.CLOUDINARY_API_SECRET);

        res.json({
            signature,
            timestamp,
            publicId,
            folder,
            cloudName: process.env.VITE_CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_API_KEY
        });
    } catch (err) {
        console.error("Error generating Cloudinary signature:", err);
        res.status(500).json({ error: 'Failed to generate upload signature' });
    }
});

// Vercel Serverless Check
if (process.env.NODE_ENV !== 'production' || process.argv[1]?.includes('index.js')) {
    app.listen(PORT, () => {
        console.log(`Signature server running on http://localhost:${PORT}`);
    });
}

// Export for Vercel Serverless Function
export default app;
