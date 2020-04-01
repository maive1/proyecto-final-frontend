import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const InfoChatNav = (props) => {

    return (  
        <div className="row">
        <nav className="blue lighten-2">
            <div className="nav-wrapper">
                <div className="row">
                    <div className="col s1 arrow">
                        <Link className="link" to="/register">
                        <i className="material-icons">keyboard_arrow_left</i>
                        </Link>
                    </div>
                    <div className="col s10 center">
                        <h1 className="header">{props.nameUsuario}</h1>
                    </div>
                    <div className="col s1 arrow">
                        <Link className="link" to="/exitchat">
                            <i className="material-icons right">keyboard_arrow_right</i>
                        </Link>
                    </div>                    
                </div>          
            </div>
        </nav>    
        </div>  
    );
}

InfoChatNav.propTypes = {
    nameUsuario: PropTypes.string.isRequired,
}

export default InfoChatNav;