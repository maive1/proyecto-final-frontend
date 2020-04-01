import React from 'react';
import { Link } from 'react-router-dom';

export default function Chat () {
    return (
        <div className="chat">
            <h1>Chat</h1>
            <Link className="link" to="/exitchat">
                Última página
            </Link>
        </div>
    );
}