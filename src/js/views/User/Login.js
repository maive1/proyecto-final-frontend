import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../store/AppContext'
import { GenerateInput } from "../../component/GenericComponent/InputGenerator"
import "../../../styles/Login/Login.css"
import M from 'materialize-css';

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
        this.toastMensajeBackend = this.toastMensajeBackend.bind(this)
    }

    static contextType = Context;

    componentDidMount() {
        const { store } = this.context
        if (store.isAuthenticated == true && store.currentUser.user_type == "patient") {
            this.props.history.push('/waiting-window')
        }
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
            let { actions } = this.context
            let email = this.state.email
            let password = this.state.password
            let entry = {
                "email": email,
                "password": password
            }
            fetch("http://localhost:5000/api/patient/login", {
                method: 'POST',
                body: JSON.stringify(entry),
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => resp.json())
                .then(data => {
                    actions.setLoginPatient(data);
                    console.log(data);
                    if (data.login.error != "") {
                        e.preventDefault();
                    } else {
                        this.props.history.push('/waiting-window');
                    }
                });
        }
        else if (this.state.email !== '' && isEmailValid === false) {
            e.preventDefault()
            this.setState({
                emailError: "Introduzca un email válido"
            })
        }
        else {
            e.preventDefault();
        }
    }

    toastMensajeBackend = () => {
        const { store, actions } = this.context;
        M.toast({ html: store.login.error, classes: 'toast-style' })
        actions.clearmessage()
    }

    render() {
        const { store } = this.context;

        return (
            <>
                <Link className="link-style-back" to="/"><div className="icon-back-letter">volver</div><i className="material-icons icon-back">keyboard_arrow_left</i></Link>
                <div className="login">
                    {
                        store.login.error && this.toastMensajeBackend()
                    }

                    <h2 className="title-login color-text">Iniciar sesión</h2>
                    <div className="form-container format">
                        <GenerateInput onKeyPress={this.validateEmail} name="email" onChange={this.handleChange} id="login-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />

                        <GenerateInput onKeyPress={this.validatePassword} name="password" onChange={this.handleChange} id="login-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
                        <p className="gen-error">{this.state.generalError}</p>
                        <button onClick={e => this.handleSubmit(e)} id="signin" className="submit-but iniciate-but-user button-letters btn waves-effect waves-lightt" type="submit" name="action">Solicitar Atención</button>

                        <div className="row">
                            <div className="col s12 m12 login-link">
                                <Link className="link to-login" to="/register">
                                    ¿No tienes cuenta? Regístrate
                            </Link>
                            </div>
                            <div className="col s12 m12 login-link">
                                <Link className="link to-login" to="/ForgotPassword">
                                    ¿Olvidaste tu contraseña?
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Login