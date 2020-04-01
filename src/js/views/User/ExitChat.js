import React from 'react';
import { Link } from 'react-router-dom';

export default function ExitChat() {
    return (
        <div className="exit">
            <h1>Exit</h1>
            <Link className="link" to="/">
                Home
            </Link>
        </div>
    );
}