import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/AppContext'

export default function RegisterCompletePro(props) {
    
    return (
        <div className="register-complete">
            <h1>Registro Completo</h1>
            <Link className="link" to="/chatpro">
                Chat
            </Link>
        </div>
    );
}