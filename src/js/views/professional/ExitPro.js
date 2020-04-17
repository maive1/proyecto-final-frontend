import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/AppContext'

export default function ExitPro () {
    return (
        <div className="exit-pro">
            <h1>Exit</h1>
            <Link className="link" to="/">
               Home
            </Link>
        </div>
    );
}