import React from "react";
import { Context } from '../../store/AppContext';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../../../styles/ProfilePro/Profilepro.css';
import ValidateFiles from "../ProfessionalUser/ValidateFiles";



class ModalFiles extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            rut: null,
            certification: null,
            numberid: null,
            curriculum: null,
            baseURL: ""
        }
      
    }
    static contextType = Context;

    componentDidMount() {
      if (!store.isAuthenticated) props.history.push('/login');
          if (store.currentUser !== null) {
              let img = store.currentUser["user"]["avatar"];
              img = store.baseURL + '/api/user/' + img;
              setImage(img)
          }
      const options = {
        onOpenStart: () => {
          console.log("Open Start");
        },
        onOpenEnd: () => {
          console.log("Open End");
        },
        onCloseStart: () => {
          console.log("Close Start");
        },
        onCloseEnd: () => {
          console.log("Close End");
        },
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
      };
      M.Modal.init(this.Modal, options);
      
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      let selector_rut = document.getElementById("register-rut")
      let selector_certification = document.getElementById("register-certification")
      let selector_numberid = document.getElementById("register-numberid")
      let selector_cv_pro = document.getElementById("professional-cv")

      let isRutValid = selector_rut.checkValidity()
      let isCertificationValid = selector_certification.checkValidity()
      let isNumberidValid = selector_numberid.checkValidity()
      let isCvProValid = selector_cv_pro.checkValidity()

      if (isRutValid === true && isCertificationValid === true && isNumberidValid === true && isCvProValid === true) {
        console.log("validations successfully!")

        var formData = new FormData();

        formData.append("rut", selector_rut.files[0]);          
        formData.append("certification", selector_certification.files[0]);
        formData.append("numberid", selector_numberid.files[0]);   
        formData.append("curriculum", selector_cv_pro.files[0]);          

        const { actions } = this.context;

        actions.editarFiles(formData);
      }
      else {
        console.log("All inputs must be valid...")
      }
    }

    editFiles = async (e, id, producto) => {
      e.preventDefault();
      const store = getStore();
      let formData = new FormData();
      formData.append("rut", producto.nombre);
      formData.append("certification", producto.descripcion);
      formData.append("numberid", producto.stock);
      formData.append("curriculum", producto.precio);
    
      let data = JSON.parse(sessionStorage.getItem("currentUser"))
      const { baseURL } = store;
      const resp = await fetch(this.baseURL + `/api/profile/editar/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
        'Authorization': 'Bearer ' + data.access_token,
        },
      })
      const dato = await resp.json();
      console.log(dato)
      if (dato.msg) {
        getActions().setTiendaAdmin();
        setStore({
        productoEditado: dato.msg
        })
      }
      }

  render() {
    const { store } = this.context;
    return (
        <div className="container">
            <a href="#d"
            className="waves-effect waves-light btn modal-trigger"
            data-target="modal1"
            >
            CERTIFICADOS
            </a>

            <div
            ref={Modal => {
                this.Modal = Modal;
            }}
            id="modal1"
            className="modal "
            >
                <div className="modal-content row">
                <h2 className="title-notifications color-text center">MODIFICAR DOCUMENTOS</h2>
                    <div className="col s12 l12">
                      <ValidateFiles file={"RUT"} id="register-rut" errorMsg={this.state.rutFileError}/>
                      <ValidateFiles file={"Certificado profesional"} errorMsg={this.state.CertificateFileError} id="register-certification"/>
                      <ValidateFiles file={"Nro registro - Supersalud"} errorMsg={this.state.NumberIdFileError} id="register-numberid"/>
                      <ValidateFiles file={"Curriculum profesional"} errorMsg={this.state.CvIdFileError} id="professional-cv"/>
                      <ValidateFiles file={"Cursos relacionados (Opcional)"} />
                    </div>
                </div>
                {/*input files*/}

                <div>
                  <form>
                    <div className="file-field input-field">
                      <div className="btn">
                        <span>File</span>
                        <input type="file" value={this.state.value} name="curriculum" onChange={(e)=>this.handleChangeFile(this.filesCV)}/>
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                    </div>
                  </form>
                </div>

                <div className="modal-footer row">
                    <div>
                    <a href="#d" className="modal-close waves-effect waves-red btn-flat">
                    Cancelar
                    </a>
                    <a href="#d" className="modal-close waves-effect waves-green btn-flat">
                    Aceptar
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ModalFiles;