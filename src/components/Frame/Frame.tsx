// components/Frame/Frame.tsx

import React from 'react';
import './Frame.css';

function Frame({ children }: { children: React.ReactNode }) {
    return (
        <div className="outline-container">
            <div className="row">
                <div className="top-left"></div>
                <div className="top-center"></div>
                <div className="top-right"></div>
            </div>
            <div className="row">
                <div className="left-center"></div>
                <div className="center">
                    {children}
                </div>
                <div className="right-center"></div>
            </div>
            <div className="row">
                <div className="bottom-left"></div>
                <div className="bottom-center"></div>
                <div className="bottom-right"></div>
            </div>
        </div>
    );
}

export default Frame;