import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/GenericComponent/InputGenerator"
import "../../../styles/Registers/RegisterUser.css"
import { Context } from '../../store/AppContext';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullname: '',
            user_type: 'patient',
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

    static contextType = Context;

    componentDidMount() {
        const { store } = this.context
        if (store.isAuthenticated === "true") {
            console.log("you're authenticated")
            this.props.history.push('waiting-window')
        }
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
    handleSubmit(e, data) {
        e.preventDefault()
        const { store, actions } = this.context
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
            var entry = {
                "email": this.state.email,
                "username": this.state.fullname,
                "password": this.state.password
            }
            const sintomas = sessionStorage.getItem("sintomas")
            const entryHelp = {
                "sintomas": sintomas
            }
            fetch("http://localhost:5000/api/patient/register", {
                method: 'POST',
                body: JSON.stringify(entry),
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => resp.json())
                .then(data => { actions.setRegisterPatient(data); console.log(data); { this.props.history.push('/waiting-window') } })
                .then(actions.sendHelpRequest(entryHelp))
        }

        else {
            e.preventDefault()
            console.log("All inputs must be valid...")
        }
    }
    render() {
        return (
            <>
            <Link className="link-style-back" to="/"><div className="icon-back-letter">volver</div><i className="material-icons icon-back">keyboard_arrow_left</i></Link>
            <div className="register row">
                <div className="col l4 hide-on-med-and-down"><img src="sources/logohmn.png" className="imageLogohmn" alt="..." /></div>
                <div className="col s12 m5 l6 offset-m3 register-container">
                    <div className="col s12 l5 offset-l4">
                        <h2 className="title-register-user color-text center-align">Crear Cuenta</h2>
                    </div>
                    <div className="view-bottom">
                        <div className="form-container format">
                            <div className="col s12 m12 l9 offset-l2">
                                <GenerateInput onChange={this.handleChangeNombre} id="register-nombre" placeholder="Nombre" type="text" errorMsg={this.state.nombreError} />
                                <GenerateInput onKeyPress={this.validateEmail} onChange={this.handleChangeEmail} id="register-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />
                                <GenerateInput onKeyPress={this.validatePassword} minLength="6" onChange={this.handleChangePassword} id="register-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
                                <button onClick={e => this.handleSubmit(e)} id="signup" className="submit-but-user btn waves-effect waves-light button-letters" type="button" name="action">Solicitar Atención</button></div>
                                <button onTouchEnd={() => this.hidPassword()} onMouseUp={() => this.hidPassword()} onTouchStart={() => this.displayPassword()} onMouseDown={() => this.displayPassword()} type="button" className="show-password "><i className="material-icons color-especial">visibility</i></button>
                        </div>
                        <div className="row">
                            <div className="col s12 m12 l5 offset-l4 login-link">
                                <Link className="link to-login" to="/login">
                                    ¿Tienes una cuenta? Inicia sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Register