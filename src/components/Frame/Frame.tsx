// components/Frame/Frame.tsx

import React from 'react';
import './Frame.css';

function Frame({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <div className={`frame-container ${className}`}>
            <div className="top-left"></div>
            <div className="top-center"></div>
            <div className="top-right"></div>
            <div className="left-center"></div>
            <div className="center">
                {children}
            </div>
            <div className="right-center"></div>
            <div className="bottom-left"></div>
            <div className="bottom-center"></div>
            <div className="bottom-right"></div>
        </div>
    );
}

export default Frame;