import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterTwoPro () {
    return (
        <div className="register-pro-two">
            <h1>Registro Profesional Dos</h1>
            <Link className="link" to="/registercompletepro">
                Register Complete
            </Link>
        </div>
    );
}