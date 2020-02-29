import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
                <div className="home">
                    <h1>Home</h1>
                    <Link className="link" to="/register">
                        Register Usuario
                    </Link>
                    <br></br>
                    <Link className="link" to="/registerpro">
                        Register Profesional
                    </Link>
                </div>
        );
}   