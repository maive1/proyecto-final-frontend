import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/InputGenerator"
import ValidateFiles from "../../component/ValidateFiles"
import "../../../styles/ProfesionalRegister.css"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            password: '',
            nombreError: 'Este campo es obligatorio.',
            emailError: 'Introduzca email válido.',
            passwordError: 'Este campo es obligatorio',
            intervalId: 0
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
            nombre: e.target.value
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
            console.log("Account created successfully!")
        }
        else {
            e.preventDefault()
            console.log("All inputs must be valid...")
        }
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
            <div>
                <Link className="link-style-back" to="/"><div className="icon-back-letter">volver</div><i className="material-icons icon-back">keyboard_arrow_left</i></Link>

                <div>
                <h4 className="title-menu-pro color-text">Bienvenido</h4>

                
                </div>
                
                <div className="view-bottom row">
                    <div className="form-container format register-professional col s12 l5">
                    <h4 className="menu-section-upload color-text">Tus datos para Login</h4>
                        <GenerateInput onChange={this.handleChangeNombre} id="register-nombre" placeholder="Nombre" type="text" errorMsg={this.state.nombreError} />

                        <GenerateInput onKeyPress={this.validateEmail} onChange={this.handleChangeEmail} id="register-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />

                        <GenerateInput onKeyPress={this.validatePassword} minLength="6" onChange={this.handleChangePassword} id="register-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />

                        <button onTouchEnd={() => this.hidPassword()} onMouseUp={() => this.hidPassword()} onTouchStart={() => this.displayPassword()} onMouseDown={() => this.displayPassword()} type="button" className="show-password">Show</button>

                    </div>
                    <div className="form-container register-professional col s12 l5"> 
                        <h4 className="menu-section-upload color-text color-text padding-tb-subtitle">Carga de documentos</h4>

                        <ValidateFiles file={"RUT"} />

                        <ValidateFiles file={"Certificado profesional"} />

                        <ValidateFiles file={"Nro registro - Supersalud"} />

                        <ValidateFiles file={"Cursos relacionados (Opcional)"} />
                    </div>
                </div>
                <button title='Back to top' className='scroll'
                    onClick={() => { this.scrollToTop(); }}>
                    <i class="material-icons arrow-up">arrow_upward</i>
                </button>;

                <Link onClick={e => this.handleSubmit(e)} to="/chat">
                    <button id="signup" className="submit-but btn waves-effect waves-light" type="submit" name="action">Crear cuenta</button>
                </Link>
            </div>
        )
    }
}
export default Register;