import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/InputGenerator"
import "../../../styles/Register.css"
import "materialize-css"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: '',
            nombreError: 'Este campo es obligatorio.',
            emailError: 'Introduzca email válido.',
            passwordError: 'Este campo es obligatorio',
            generalError: ''
        }
        this.handleChangeNombre = this.handleChangeNombre.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.displayPassword = this.displayPassword.bind(this)
        this.hidPassword = this.hidPassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeNombre(e) {
        this.setState({
            fullname: e.target.value
        })
    }
    handleChangeEmail(e) {
        setTimeout(this.setState({
            email: e.target.value
        }), 1000)
    }
    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    validatePassword() {
        if (this.state.password.length === 0) {
            this.setState({
                passwordError: "Este campo es obligatorio"
            })
        }
        else if (this.state.password.length < 6) {
            this.setState({
                passwordError: "La contraseña debe tener un mínimo de 6 caracteres"
            })
        }
    }
    displayPassword() {
        let passwordField = document.getElementById("register-contrasenya")
        passwordField.type = "text"
    }
    hidPassword() {
        let passwordField = document.getElementById("register-contrasenya")
        passwordField.type = "password"
    }
    handleSubmit(e) {
        let password = this.state.password
        let isPasswordValid = document.getElementById("register-contrasenya").checkValidity()
        let isNameValid = document.getElementById("register-nombre").checkValidity()
        let isEmailValid = document.getElementById("register-email").checkValidity()
        //------- Checking All Inputs ---------------------//
        document.getElementById("register-email").focus()
        document.getElementById("register-nombre").focus()
        document.getElementById("register-contrasenya").focus()
        document.getElementById("signup").focus()
        //-------------------------------------------------//
        if (password === '') {
            e.preventDefault()
            this.setState({
                passwordError: "Este campo es obligatorio"
            })
        }
        else if (password.length < 6) {
            e.preventDefault()
            this.setState({
                passwordError: "La contraseña debe tener un mínimo de 6 caracteres."
            })
        }
        if (isEmailValid === true && isNameValid === true && isPasswordValid === true) {
            let email = this.state.email
            let nombre = this.state.nombre
            let password = this.state.password
            let entry = {
                "email": email,
                "password": password,
                "username": nombre
            }
            fetch("http://localhost:5000/api/register", {
                method: 'POST',
                body: JSON.stringify(entry),
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => {
                    if (resp.ok) {
                        console.log("Registro correcto")
                        this.props.history.push('/chat')
                    }
                    else {
                        console.log("Algo salió mal")
                        this.setState({
                            generalError: 'El correo ingresado ya está en uso'
                        })
                    }
                })
        }

        else {
            e.preventDefault()
            console.log("All inputs must be valid...")
        }
    }
    render() {
        return (
            <div className="register">
                <h2 className="title">Crear Cuenta</h2>
                <div className="view-bottom">
                    <div className="form-container format">
                        <GenerateInput onChange={this.handleChangeNombre} id="register-nombre" placeholder="Nombre" type="text" errorMsg={this.state.nombreError} />
                        <GenerateInput onKeyPress={this.validateEmail} onChange={this.handleChangeEmail} id="register-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />
                        <GenerateInput onKeyPress={this.validatePassword} minLength="6" onChange={this.handleChangePassword} id="register-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
                        <button onTouchEnd={() => this.hidPassword()} onMouseUp={() => this.hidPassword()} onTouchStart={() => this.displayPassword()} onMouseDown={() => this.displayPassword()} type="button" className="show-password">Show</button>
                        <p className="gen-error">{this.state.generalError}</p>
                        <button onClick={e => this.handleSubmit(e)}>
                            <button id="signup" className="submit-but btn waves-effect waves-light" type="submit" name="action">Solicitar atención</button>
                        </button>
                        <Link onClick={e => this.handleSubmit(e)} to="/chat">
                            <button id="signup" className="submit-but btn waves-effect waves-light" type="submit" name="action">Solicitar atención</button>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 login-link">
                            <Link className="link to-login" to="/login">
                                ¿Tienes una cuenta? Inicia sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register