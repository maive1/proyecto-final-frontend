import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/InputGenerator"
import "../../../styles/Login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: 'Este campo es obligatorio.',
            passwordError: 'Este campo es obligatorio',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e) {
        let isPasswordValid = document.getElementById("login-contrasenya").checkValidity()
        let isEmailValid = document.getElementById("login-email").checkValidity()
        //------- Checking All Inputs ---------------------//
        document.getElementById("login-email").focus()
        document.getElementById("login-contrasenya").focus()
        document.getElementById("signin").focus()
        if (isEmailValid === true && isPasswordValid === true) {
            console.log("Going to chat")
        }
        else if (this.state.email !== '' && isEmailValid === false) {
            e.preventDefault()
            this.setState({
                emailError: "Introduzca un email válido"
            })
        }
        else {
            e.preventDefault()
        }
    }

    render() {
        return (
            <div className="login">
                <h4 className="title">Iniciar sesión</h4>
                <div className="form-container format">
                    <GenerateInput onKeyPress={this.validateEmail} onChange={this.handleChangeEmail} id="login-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />
                    <GenerateInput onKeyPress={this.validatePassword} onChange={this.handleChangePassword} id="login-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
                    <Link onClick={e => this.handleSubmit(e)} className="link" to="/chat" >
                        <button id="signin" className="submit-but btn waves-effect waves-light" type="submit" name="action">Iniciar Sesión</button>
                    </Link>
                    <div className="row">
                        <div className="col s12 m12 login-link">
                            <Link className="link to-login" to="/register">
                                ¿No tienes cuenta? Regístrate
                </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login