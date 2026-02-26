import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import './AdminToggle.css';

const AdminToggle = () => {
    const { isAdmin, toggleAdmin } = useAdmin();

    return (
        <button
            className={`admin-toggle ${isAdmin ? 'admin-toggle--active' : ''}`}
            onClick={toggleAdmin}
            title={isAdmin ? 'Exit Admin Mode' : 'Enter Admin Mode'}
            aria-label="Toggle Admin Mode"
        >
            <svg className="admin-toggle__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            {isAdmin && <span className="admin-toggle__label">Admin</span>}
        </button>
    );
};

export default AdminToggle;
