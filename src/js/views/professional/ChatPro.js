import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatPro () {
    return (
        <div className="chat-pro">
            <h1>Chat</h1>
            <Link className="link" to="/exitpro">
                Exit
            </Link>
        </div>
    );
}