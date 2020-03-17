import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const NavPerfil = (props) => {

    return (  
        <div className="perfil">
            <div className="row">
                <Link className="link" to="/register">
                <i className="material-icons col s1">keyboard_arrow_left</i>
                <h6 className="col s4">volver</h6>
                </Link>
            </div>
            <div className="row">
                <h1 className="title center">Perfil</h1>
            </div>
            <div className="nav-content">
            <ul className="tabs tabs-transparent">
                <li className="tab"><a href="#test1">Ajustes</a></li>
                <li className="tab"><a href="#test2">Historial de Conversaciones</a></li>
            </ul>
            </div>
        </div> 
    );
}

NavPerfil.propTypes = {
    nameUsuario: PropTypes.string.isRequired,
}

export default NavPerfil;