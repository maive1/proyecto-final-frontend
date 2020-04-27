import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/GenericComponent/InputGenerator"
import { Context } from '../../store/AppContext';
import "../../../styles/Login/Login.css"
import "../../../styles/Registers/ProfessionalRegister.css"
import M from 'materialize-css';

class LoginPro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: 'Este campo es obligatorio.',
      passwordError: 'Este campo es obligatorio',
    }
  }
  static contextType = Context;

  handleChangeEmailProLo = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleChangePasswordProLo = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  validatePasswordProLo = () => {
    if (this.state.password.length === 0) {
        this.setState({
            passwordError: "Este campo es obligatorio"
        })
    }
  }

  validateEmailProLo = () => {
    if (this.state.email === "") {
        this.setState({
            passwordError: "Este campo es obligatorio"
        })
    }
  }

  handleSubmitProLo = (e) => {
    e.preventDefault();

    let selector_email_pro_lo = document.getElementById("login-email")
    let selector_password_pro_lo = document.getElementById("login-contrasenya")

    let isEmailValid_pro_lo = selector_email_pro_lo.checkValidity()
    let isPasswordValid_pro_lo = selector_password_pro_lo.checkValidity()

    //------- Checking All Inputs ---------------------//

    selector_email_pro_lo.focus()
    selector_password_pro_lo.focus()
    document.getElementById("signin").focus()

    if (this.state.email !== '' && isEmailValid_pro_lo === false) {
      e.preventDefault()
      this.setState({
        emailError: "Introduzca un email válido"
      })
    }
    
    if (isEmailValid_pro_lo === true && isPasswordValid_pro_lo === true) {
      console.log("Data entry")

      let data = {
        email: selector_email_pro_lo.value,
        password: selector_password_pro_lo.value,
      };
  
      const { actions } = this.context;

      actions.loginProfessional(data);    
    }    
    else {
      console.log("All inputs must be valid...")
    }
  }

  componentDidMount() {
    const { store } = this.context;
    if (store.isAuthenticated === "true") this.props.history.push('/perfil');
  }

  componentDidUpdate() {
    const { store} = this.context;
    if (store.isAuthenticated === "true") this.props.history.push('/perfil');
  }  

  toastMensajeBackend = () => {
    const { store, actions } = this.context;
    M.toast({html: store.login.error, classes: 'toast-style'})
    actions.clearmessage()
  }

  render() {
    const { store } = this.context;

    return (
      <>
        <div className="login row">
          <Link className="link-style-back" to="/"><div className="icon-back-letter">volver</div><i className="material-icons icon-back">keyboard_arrow_left</i></Link>
        {
          store.login.error && this.toastMensajeBackend()
        }
        <div className="col l6 hide-on-med-and-down"><img src="sources/logohmn.png" className="imageLogohmn imglogologin" alt="..." /></div>
        <div className="col s12 m5 l4 push-m2">
          <h2 className="title-login color-text">Inicia sesión</h2>
          <div className="form-container format">
            <GenerateInput onKeyPress={this.validateEmailProLo} onChange={this.handleChangeEmailProLo} id="login-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />
            <GenerateInput onKeyPress={this.validatePasswordProLo} onChange={this.handleChangePasswordProLo} id="login-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
            <Link onClick={e => this.handleSubmitProLo(e)} className="link" to="/perfil" >
              <button id="signin" className="iniciate-but-pro button-letters btn waves-effect waves-light" type="button" name="action">Acceder</button>
            </Link>
            <div className="row">
              <div className="col s12 m12 login-link">
                <Link className="link to-login" to="/registerpro">
                  ¿No tienes cuenta? Regístrate
                </Link>
              </div>
              <div className="col s12 m12 login-link">
                <Link className="link to-login" to="/forgotpassword" >
                  ¿Olvidaste tu contraseña?
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

export default LoginPro;