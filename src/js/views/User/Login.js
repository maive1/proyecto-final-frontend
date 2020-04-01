import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/AppContext'
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
            generalError: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
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
            let email = this.state.email
            let password = this.state.password
            let entry = {
                "email": email,
                "password": password
            }
            fetch("http://localhost:5000/api/login", {
                method: 'POST',
                body: JSON.stringify(entry),
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => {
                    if (resp.status == 200) {
                        console.log(resp)
                        console.log("Inicio de sesión exitoso")
                        this.props.history.push('/chat')
                    }
                    else if(resp.status == 404) {
                        console.log(resp)
                        console.log("There was a problem")
                        this.setState({
                            generalError: 'Usuario no encontrado'
                        })
                    }
                    else if(resp.status == 401) {
                        this.setState({
                            generalError: 'Contraseña incorrecta'
                        })
                    }
                })
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
                <h2 className="title">Iniciar sesión</h2>
                <div className="form-container format">
                    <GenerateInput onKeyPress={this.validateEmail} name="email" onChange={this.handleChange} id="login-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />

                    <GenerateInput onKeyPress={this.validatePassword} name="password" onChange={this.handleChange} id="login-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
                    <p className="gen-error">{this.state.generalError}</p>
                    <button onClick={e => this.handleSubmit(e)} id="signin" className="submit-but btn waves-effect waves-light" type="submit" name="action">Solicitar Atención</button>
                    <div className="row">
                        <div className="col s12 m12 login-link">
                            <Link className="link to-login" to="/register">
                                ¿No tienes cuenta? Regístrate
                            </Link>
                        </div>
                        <div className="col s12 m12 login-link">
                            <Link className="link to-login" >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login