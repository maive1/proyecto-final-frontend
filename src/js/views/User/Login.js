import React from 'react';
import { Link } from 'react-router-dom';

export default function Login () {
    return (
        <div className="login">
            <h1>Login</h1>
            <Link className="link" to="/chat">
                Chat
            </Link>
        </div>
    )
}