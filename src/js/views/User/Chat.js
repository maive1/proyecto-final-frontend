import React from 'react';
import { Link } from 'react-router-dom';

export default function Chat () {
    return (
        <div className="container">
            <div>
                <h4 className="title-under">Chat developing</h4>
            </div>
            <div className="col s12 m12">
                <div className="card-panel image-under"></div>
                <div><Link className="link_style" to="/exitchat">Exit Page</Link></div>
            </div>
        </div>
    );
}