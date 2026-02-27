import React, { useRef, useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import './VideoSlot.css';

const VideoSlot = ({ slotId, aspectRatio = '16/9', placeholderLabel = 'Video', className = '', fullCover = false }) => {
    const { isAdmin, videos, setVideo, removeVideo } = useAdmin();
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const videoData = videos[slotId];

    const handleBrowse = () => fileInputRef.current?.click();

    const [isHovered, setIsHovered] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // Force autoplay on mount or URL change to fix React 'autoPlay' attribute bugs
    React.useEffect(() => {
        if (videoRef.current && videoData?.url) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay blocked by browser policy:", error);
            });
        }
    }, [videoData?.url, isMuted]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) setVideo(slotId, file);
        e.target.value = '';
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsMuted(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsMuted(true);
    };

    const toggleMute = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMuted(prev => !prev);
    };

    const wrapperStyle = fullCover ? {} : { aspectRatio };

    return (
        <div
            className={`video-slot ${fullCover ? 'video-slot--cover' : ''} ${isAdmin ? 'video-slot--admin' : ''} ${className}`}
            style={wrapperStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {videoData?.url ? (
                <>
                    <video
                        ref={videoRef}
                        className="video-slot__video"
                        src={videoData.url}
                        autoPlay
                        muted={isMuted}
                        loop
                        playsInline
                    />
                    {isHovered && (
                        <button
                            className="video-slot__mute-btn"
                            onClick={toggleMute}
                            aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                            {isMuted ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                    <line x1="23" y1="9" x2="17" y2="15"></line>
                                    <line x1="17" y1="9" x2="23" y2="15"></line>
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                </svg>
                            )}
                        </button>
                    )}
                </>
            ) : (
                <div className="video-slot__placeholder">
                    <div className="video-slot__play-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className="video-slot__label">{placeholderLabel}</span>
                </div>
            )}

            {isAdmin && (
                <div className="video-slot__admin-overlay">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                        className="video-slot__file-input"
                    />
                    <div className="video-slot__admin-controls">
                        <span className="video-slot__slot-name">{slotId}</span>
                        {videoData ? (
                            <>
                                <span className="video-slot__filename">{videoData.name}</span>
                                <div className="video-slot__admin-buttons">
                                    <button className="video-slot__btn video-slot__btn--browse" onClick={handleBrowse}>
                                        Replace
                                    </button>
                                    <button className="video-slot__btn video-slot__btn--remove" onClick={() => removeVideo(slotId)}>
                                        Remove
                                    </button>
                                </div>
                            </>
                        ) : (
                            <button className="video-slot__btn video-slot__btn--browse" onClick={handleBrowse}>
                                Browse & Select
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoSlot;
