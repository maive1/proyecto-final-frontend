import React from 'react';
import { Link } from 'react-router-dom';
import { FileInput } from "../../component/FileInput"
import "../../../styles/RegisterPro2.css"

export default function RegisterTwoPro() {
    return (
        <div className="register-pro-two">
            <h1 className="title">Registro Pro 2</h1>
            <FileInput label="Nro. Registro Superintendencia de Salud:" />
            <FileInput label="Hoja de vida:" />
            <FileInput label="Cursos relacionados:" />
            <div className="row bottom-but">
                <div className="col registerpro-btn">
                    <Link onClick={e => this.handleSubmit(e)} to="/chat">
                        <button id="signup" className="submit-but btn waves-effect waves-light" type="submit" name="action">Enviar Registro</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}