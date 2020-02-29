import React from 'react';
import { Link } from 'react-router-dom';

export default function Register () {
    return (
            <div className="register">
                <h1>Registro</h1>
                <Link className="link" to="/login">
                    Login
                </Link>
            </div>
        );
}