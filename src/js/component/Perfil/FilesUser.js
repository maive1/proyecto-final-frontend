import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const FilesUser = (props) => {

    return (  
        <div className="documentos">
            <ul class="collection with-header">
                <li class="collection-header"><h2 className="center">Documentos</h2></li>
                <li class="collection-item"><div className="row">Cédula de Identidad<a href="#!" class="secondary-content"><i class="material-icons file">file_copy</i></a></div></li>
                <li class="collection-item"><div className="row">Certificado Profesional<a href="#!" class="secondary-content"><i class="material-icons file">file_copy</i></a></div></li>
                <li class="collection-item"><div className="row">Certificado de SuperIndentencia<a href="#!" class="secondary-content"><i class="material-icons file">file_copy</i></a></div></li>
                <li class="collection-item"><div className="row">Curriculum<a href="#!" class="secondary-content"><i class="material-icons file">file_copy</i></a></div></li>
            </ul>
        </div> 
    );
}

FilesUser.propTypes = {
    nameUsuario: PropTypes.string.isRequired,
}

export default FilesUser;