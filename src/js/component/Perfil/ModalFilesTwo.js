import React from "react";
import { Context } from '../../store/AppContext';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import '../../../styles/ProfilePro/Profilepro.css';
import ValidateFiles from "../../component/ProfessionalUser/ValidateFiles";


class ModalFilesTwo extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            professionalId: "",
            nameProfessional: "",
            rut: "",
            certification: "",
            numberid: "",
            curriculum: "",
            rutError: "",
            certificateError: "",
            numberIdError: "",
            cvError:"",
            filesEdited: null, 
        };
        this.Modal = React.createRef();
        this.uploadFiles = this.uploadFiles.bind(this);
    }

    static contextType = Context;

    componentDidMount() {
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
        const { store, actions } = this.context;
        
        if (store.currentUser !== null) {
            let professionalId = store.currentUser["user"]["id"];
            console.log(professionalId);
            this.setState({
              professionalId: professionalId
            })
            actions.setProfessional(professionalId);
        }
        this.uploadFiles(store)
    };

    uploadFiles = (store) => {
      let nameProfessional = store.professional["professional"]["name"];
      let rut = store.professional["user"]["rut"];
      let certification = store.professional["user"]["certification"];
      let numberid = store.professional["user"]["numberid"];
      let curriculum = store.professional["professional"]["curriculum"];

      rut = store.domain + '/api/professional/files/' + rut;
      certification = store.domain + '/api/professional/files/' + certification;
      numberid = store.domain + '/api/professional/files/' + numberid;
      curriculum = store.domain + '/api/professional/files/' + curriculum;

      this.setState({
        nameProfessional: nameProfessional,
        rut: rut,
        certification: certification,
        numberid: numberid,
        curriculum: curriculum
      })
    };

    handleChangeFiles = (e) => {
      this.setState({
        [e.target.name]: e.target.files[0]
      });
    };  

    handleSubmitFiles = (e) => {
      e.preventDefault();
      
      let idRut = document.getElementById("edited-rut");
      let idCertification = document.getElementById("edited-certification");
      let idNumberid = document.getElementById("edited-numberid");
      let idCv = document.getElementById("edited-cv");

      let isRutOk = idRut.checkValidity();
      let isCertificationOk = idCertification.checkValidity();
      let isNumberidOk = idNumberid.checkValidity();
      let isCvOk = idCv.checkValidity();

      if (isRutOk === true) {
        this.setState({ rutError: "" });
      } else {
        this.setState({ rutError: "Debe Seleccionar un Documento" });
      }

      if (isCertificationOk === true) {
        this.setState({ certificateError: "" });
      } else {
      this.setState({ certificateError: "Debe Seleccionar un Documento" });
      }

      if (isNumberidOk === true) {
        this.setState({ numberIdError: "" });
      } else {
      this.setState({ numberIdError: "Debe Seleccionar un Documento" });
      }

      if (isCvOk === true) {
        this.setState({ cvError: "" });
      } else {
      this.setState({ cvError: "Debe Seleccionar un Documento" });
      }

      if (isRutOk === true && isCertificationOk === true && isNumberidOk === true && isCvOk === true) {
        console.log("validations successfully!")

        var formData = new FormData();

        formData.append("rut", idRut.files[0]);          
        formData.append("certification", idCertification.files[0]);
        formData.append("numberid", idNumberid.files[0]);   
        formData.append("curriculum", idCv.files[0]);          

        const { actions } = this.context;

        actions.editFiles(formData, this.state.professionalId);
      }
      else {
        console.log("All inputs must be valid...");
      }
    }

  render() {
    const { actions, store } = this.context;
    return (
        <div className="container">
            <a href="#d"
            className="waves-effect waves-light btn-large modal-trigger"
            data-target="modal1"
            >
            MODIFICAR ARCHIVOS
            </a>

            <div
            ref={Modal => {
                this.Modal = Modal;
            }}
            id="modal1"
            className="modal modal-fixed-footer"
            >
                <div className="modal-content">
                  <h4 className="menu-section-upload color-text color-text padding-tb-subtitle">Modificar documentos</h4>
                  <h5 className="accepted-files-letters">Documentos permitidos: jpeg, jpg y pdf</h5>

                  <ValidateFiles file={this.state.rut} id="edited-rut" errorMsg={this.state.rutFileError}/>

                  <ValidateFiles file={this.state.certification} errorMsg={this.state.CertificateFileError} id="edited-certification"/>

                  <ValidateFiles file={this.state.numberid} errorMsg={this.state.NumberIdFileError} id="edited-numberid"/>

                  <ValidateFiles file={this.state.curriculum} errorMsg={this.state.CvIdFileError} id="edited-cv"/>

                </div>
                {/*input files*/}
                

                <div className="modal-footer">
                    <div>
                      <a href="#d" className="modal-close waves-effect waves-red btn-flat">
                        Cancelar
                      </a>
                      <button id="accepted-files" className="modal-close waves-effect waves-green btn-flat" type="button" name="action" onClick={e => this.handleSubmitFiles(e)}>
                        Aceptar
                      </button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ModalFilesTwo;