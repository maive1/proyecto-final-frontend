import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPro () {
    return (
        <div className="register-pro">
            <h1>Registro Profesional</h1>
            <Link className="link" to="/registertwopro">
                Registro dos
            </Link>
        </div>
    );
}