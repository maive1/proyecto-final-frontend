import React, { Component } from 'react';
import "../../../styles/Registers/ProfessionalRegister.css";

class ValidateFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      errorFile: "",
    };
  }

  toggle = (e) => {
    this.setState({ addClass: !this.state.addClass });
    this.ValidateFiles(e);
  }

  ValidateFiles = (e) => {
    let { value } = e.target;
    let validate = /\.(|jpe?g|png|pdf)$/i
    if (validate.test(value)) {
      this.setState({ errorFile: "" });
    } else {
      this.setState({ errorFile: "Archivo no valido" });
      e.target.value = ""
    }
  }


  render() {

    let labelClass = ["padding-label style-letter"];
    if (this.state.addClass) {
      labelClass.push('hidden');
    }

    let textHelperClass = ["helper-text"];
    if (this.state.errorFile !== "" || this.props.errorMsg !== "") {
      textHelperClass.push('file-fields-error');
    }

    let errorMsg = "";
    if (this.state.errorFile !== "") {
      errorMsg = this.state.errorFile
    } else {
      errorMsg = this.props.errorMsg
    }

    return (
      <>
        <div className="file-field input-field input-style">
          <div className="btn-icon">
            <span><i className="material-icons color-icon">file_copy</i></span>
            <input className="inputfile validate" onChange={this.toggle.bind(this)} id={this.props.id} type="file" name="Files" accept="image/x-png,image/jpeg,image/jpg,application/pdf" required />
          </div>
          <label className={labelClass.join(' ')} htmlFor="files">{this.props.file}</label>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
          <span className={textHelperClass.join(' ')} > {errorMsg} </span>
        </div>
      </>
    )
  }
}


export default ValidateFiles;