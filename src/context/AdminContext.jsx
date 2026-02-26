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
        // Optimistically show a loading state or temporary URL if desired,
        // but for now we'll just wait for the upload to complete.

        const formData = new FormData();
        // Append slotId FIRST so multer parses it before the file stream starts
        formData.append('slotId', slotId);
        formData.append('video', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Upload failed with status ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                // Determine persistent URL, adding a timestamp query param to bust cache
                const persistentUrl = `${data.url}?t=${new Date().getTime()}`;

                setVideos(prev => ({
                    ...prev,
                    [slotId]: { url: persistentUrl, name: file.name, isPersistent: true }
                }));
            } else {
                throw new Error(data.error || "Upload failed");
            }

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
