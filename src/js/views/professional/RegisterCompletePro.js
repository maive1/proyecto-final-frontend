import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterCompletePro () {
    return (
        <div className="register-complete">
            <h1>Registro Completo</h1>
            <Link className="link" to="/chatpro">
                Chat
            </Link>
        </div>
    );
}