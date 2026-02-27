import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AdminContext = createContext(null);

export const useAdmin = () => {
    const ctx = useContext(AdminContext);
    if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
    return ctx;
};

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(() => {
        try { return localStorage.getItem('xyz-admin-mode') === 'true'; } catch { return false; }
    });

    const [videos, setVideos] = useState(() => {
        try {
            const savedVideos = localStorage.getItem('xyz-videos');
            return savedVideos ? JSON.parse(savedVideos) : {};
        } catch (e) {
            console.error("Failed to load videos from local storage", e);
            return {};
        }
    });

    // Save videos to local storage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('xyz-videos', JSON.stringify(videos));
        } catch (e) {
            console.error("Failed to save videos to local storage", e);
        }
    }, [videos]);


    const toggleAdmin = useCallback(() => {
        setIsAdmin(prev => {
            if (!prev) {
                // If trying to turn ON admin mode, prompt for password
                const password = window.prompt("Enter Admin Password:");
                const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;

                if (password !== correctPassword) {
                    alert("Incorrect Password!");
                    return false;
                }
            }

            // If turning off, or if password was correct, toggle state
            const next = !prev;
            try { localStorage.setItem('xyz-admin-mode', String(next)); } catch { }
            return next;
        });
    }, []);

    const setVideo = useCallback(async (slotId, file) => {
        // Optimistically show a loading state if desired

        try {
            // STEP 1: Get secure upload signature from our backend
            const sigResponse = await fetch('/api/get-signature', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slotId })
            });

            if (!sigResponse.ok) {
                throw new Error("Failed to get upload signature from server.");
            }

            const { signature, timestamp, publicId, folder, cloudName, apiKey } = await sigResponse.json();

            // STEP 2: Upload directly to Cloudinary using their REST API
            const cloudinaryFormData = new FormData();
            cloudinaryFormData.append("file", file);
            cloudinaryFormData.append("api_key", apiKey);
            cloudinaryFormData.append("timestamp", timestamp);
            cloudinaryFormData.append("signature", signature);
            cloudinaryFormData.append("folder", folder);
            cloudinaryFormData.append("public_id", publicId);
            cloudinaryFormData.append("resource_type", "video");

            const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
                method: "POST",
                body: cloudinaryFormData
            });

            if (!uploadResponse.ok) {
                const errData = await uploadResponse.json();
                throw new Error(`Cloudinary Error: ${errData?.error?.message || uploadResponse.status}`);
            }

            const data = await uploadResponse.json();

            // Determine persistent URL, adding a timestamp query param to bust cache
            const persistentUrl = `${data.secure_url}?t=${new Date().getTime()}`;

            setVideos(prev => ({
                ...prev,
                [slotId]: { url: persistentUrl, name: file.name, isPersistent: true }
            }));

        } catch (error) {
            console.error("Error uploading video:", error);
            alert("Failed to save video to server. Is the backend running?");

            // Fallback to local temporary blob if server upload fails
            const url = URL.createObjectURL(file);
            setVideos(prev => {
                if (prev[slotId]?.url && !prev[slotId]?.isPersistent) URL.revokeObjectURL(prev[slotId].url);
                return { ...prev, [slotId]: { url, name: file.name, file, isPersistent: false } };
            });
        }
    }, []);

    const removeVideo = useCallback((slotId) => {
        setVideos(prev => {
            if (prev[slotId]?.url && !prev[slotId]?.isPersistent) {
                URL.revokeObjectURL(prev[slotId].url);
            }
            const next = { ...prev };
            delete next[slotId];
            return next;
        });
    }, []);

    return (
        <AdminContext.Provider value={{ isAdmin, toggleAdmin, videos, setVideo, removeVideo }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContext;
