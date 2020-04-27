import React from 'react';
import { Link } from 'react-router-dom';
import { GenerateInput } from "../../component/GenericComponent/InputGenerator"
import ValidateFiles from "../../component/ProfessionalUser/ValidateFiles"
import ScrollTop from '../../component/GenericComponent/ScrolltoTop';
import "../../../styles/Registers/ProfessionalRegister.css"
import { Context } from '../../store/AppContext';
import M from 'materialize-css';

class RegisterProfesional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            password: '',
            nombreError: 'Este campo es obligatorio.',
            emailError: 'Introduzca email válido.',
            passwordError: 'Este campo es obligatorio',
            rutFileError: "",
            CertificateFileError: "",
            NumberIdFileError: "",
            CvIdFileError:"",
        }
    }

    static contextType = Context;

    handleChangeNombreRePro = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }

    handleChangeEmailRePro = (e) => {
        setTimeout(this.setState({
            email: e.target.value
        }), 1000)
    }

    handleChangePasswordRePro = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    validatePasswordRePro = () => {
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

    validateEmailRePro = () => {
        if (this.state.email === "") {
            this.setState({
                passwordError: "Este campo es obligatorio"
            })
        }
    }

    displayPasswordRePro  = () => {
        let passwordField = document.getElementById("register-contrasenya")
        passwordField.type = "text"
    }

    hidPasswordRePro = () => {
        let passwordField = document.getElementById("register-contrasenya")
        passwordField.type = "password"
    }  

    handleSubmitRePro = (e) => {
        e.preventDefault();

        let password = this.state.password

        let selector_user_name = document.getElementById("register-nombre")
        let selector_email = document.getElementById("register-email")
        let selector_password = document.getElementById("register-contrasenya")
        let selector_rut = document.getElementById("register-rut")
        let selector_certification = document.getElementById("register-certification")
        let selector_numberid = document.getElementById("register-numberid")
        let selector_cv_pro = document.getElementById("professional-cv")

        let isNameValid = selector_user_name.checkValidity()
        let isEmailValid = selector_email.checkValidity()
        let isPasswordValid = selector_password.checkValidity()
        let isRutValid = selector_rut.checkValidity()
        let isCertificationValid = selector_certification.checkValidity()
        let isNumberidValid = selector_numberid.checkValidity()
        let isCvProValid = selector_cv_pro.checkValidity()

        //------- Checking All Inputs ---------------------//

        selector_user_name.focus()
        selector_email.focus()
        selector_password.focus()
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

        if (isRutValid === true) {
            this.setState({ rutFileError: "" });
        } else {
            this.setState({ rutFileError: "Debe Seleccionar un Documento" });
        }

        if (isCertificationValid === true) {
            this.setState({ CertificateFileError: "" });
        } else {
          this.setState({ CertificateFileError: "Debe Seleccionar un Documento" });
        }

        if (isNumberidValid === true) {
            this.setState({ NumberIdFileError: "" });
        } else {
          this.setState({ NumberIdFileError: "Debe Seleccionar un Documento" });
        }

        if (isCvProValid === true) {
            this.setState({ CvIdFileError: "" });
        } else {
          this.setState({ CvIdFileError: "Debe Seleccionar un Documento" });
        }

        if (isEmailValid === true && isNameValid === true && isPasswordValid === true  && isRutValid === true && isCertificationValid === true && isNumberidValid === true && isCvProValid === true) {
          console.log("validations successfully!")

          var formData = new FormData();

          formData.append("name", selector_user_name.value);
          formData.append("email", selector_email.value);
          formData.append("password", selector_password.value);

          formData.append("rut", selector_rut.files[0]);          
          formData.append("certification", selector_certification.files[0]);
          formData.append("numberid", selector_numberid.files[0]);   
          formData.append("curriculum", selector_cv_pro.files[0]);          

          const { actions } = this.context;

          actions.createRegister(formData, 'professional');
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
        const { store } = this.context;
        if (store.isAuthenticated === "true") this.props.history.push('/perfil');
    }

    toastMensajeBackend = () => {
        const { store, actions } = this.context;
        M.toast({html: store.register.error, classes: 'toast-style'})
        actions.clearmessage()
    }

    render() {
        const { store } = this.context;

        return (
            <>
                <div className="row register-view ">
                    <Link className="link-style-back" to="/LoginPro"><div className="icon-back-letter">volver</div><i className="material-icons icon-back">keyboard_arrow_left</i></Link>
                    <div className="col m4 l4 xl-5 hide-on-med-and-down">
                        <img src="sources/logohmn.png" className="imageLogohmn" id="logoloadfile" alt="..." />
                    </div>
                    <div className="col s12 m4 l4 xl-4 welcome-section">

                        {
                        !!store.register.error && this.toastMensajeBackend()
                        }

                        <div className="row title-register">
                            <div className="center">
                                <h4 className="title-menu-pro color-text">Bienvenido</h4>
                            </div>
                        </div>
                        <div className="view-bottom-pro row">
                            <div className="">
                                <div className=" col s12 m12 l5 xl5  form-container format register">
                                    <h4 className="menu-section-upload color-text color-text padding-tb-subtitle">DATOS PERSONALES</h4>
                                    <GenerateInput onChange={this.handleChangeNombreRePro} id="register-nombre" placeholder="Nombre" type="text" errorMsg={this.state.nombreError} />
                                    <GenerateInput onKeyPress={this.validateEmailRePro} onChange={this.handleChangeEmailRePro} id="register-email" placeholder="Email" type="email" errorMsg={this.state.emailError} />
                                    <GenerateInput onKeyPress={this.validatePasswordRePro} minLength="6" onChange={this.handleChangePasswordRePro} id="register-contrasenya" placeholder="Contraseña" type="password" errorMsg={this.state.passwordError} />
                                    <button onTouchEnd={() => this.hidPasswordRePro()} onMouseUp={() => this.hidPasswordRePro()} onTouchStart={() => this.displayPasswordRePro()} onMouseDown={() => this.displayPasswordRePro()} type="button" className="show-password-pro"><icon className="material-icons color-especial">visibility</icon></button>
                                </div>
                            </div>
                            <div className="">
                                <div className="col s12 m12 l7 xl7 form-container register-professional"> 
                                    

                                    <h4 className="menu-section-upload color-text color-text padding-tb-subtitle">Carga de documentos</h4>
                                    <h5 className="accepted-files-letters">Documentos permitidos: jpeg, jpg y pdf</h5>

                                    <ValidateFiles file={"RUT"} id="register-rut" errorMsg={this.state.rutFileError}/>

                                    <ValidateFiles file={"Certificado profesional"} errorMsg={this.state.CertificateFileError} id="register-certification"/>

                                    <ValidateFiles file={"Nro registro - Supersalud"} errorMsg={this.state.NumberIdFileError} id="register-numberid"/>

                                    <ValidateFiles file={"Curriculum profesional"} errorMsg={this.state.CvIdFileError} id="professional-cv"/>

                                    <ValidateFiles file={"Cursos relacionados (Opcional)"} />
                                </div>
                            </div>
                        </div>
                        <div className="hide-on-large-only">                            
                            <ScrollTop />                            
                        </div>
                        <div className="row">
                            <Link onClick={e => this.handleSubmitRePro(e)} to="/perfil">
                                <button id="signup" className="submit-but-pro btn waves-effect waves-light" type="button" name="action">Crear cuenta</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RegisterProfesional;