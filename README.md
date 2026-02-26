# Marketing Agency Site

A modern, high-performance website for a Marketing Agency built with React and Vite. It features a customizable Admin Mode for uploading videos directly into the UI components and fully integrated lead-capture forms via Formspree.

## Features
- **Admin Mode (Local Video Uploads)**: Upload and preview video files directly in the browser. Videos are saved persistently via a local Node/Express backend.
- **Form Integration**: Lead capture forms are pre-configured to send submissions to Formspree.
- **Scroll Animations**: Smooth entrance animations using ScrollReveal.
- **Responsive Design**: Polished layout using modern CSS techniques.

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Duplicate the `.env.example` file and rename it to `.env`.
   Fill in the required values:
   - `VITE_FORMSPREE_URL`: Your Formspree form endpoint.
   - `VITE_ADMIN_PASSWORD`: A secure password to unlock the Admin Mode video upload features on the frontend.

3. **Start Development Server:**
   This project uses `concurrently` to run both the Vite frontend server and the Express backend server (for video uploads) at the same time.
   ```bash
   npm run dev
   ```

## Admin Mode Usage
1. Open the site in your browser (usually `http://localhost:5173`).
2. Click the Admin Toggle button in the bottom-left corner.
3. Enter the password you configured in your `.env` file (`VITE_ADMIN_PASSWORD`).
4. Video placeholders will now reveal "Browse & Select" buttons.
5. Upload `.mp4` or `.webm` files. They will be saved to `public/videos/` and persist across reloads.

