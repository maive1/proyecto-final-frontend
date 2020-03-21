import React, { Component } from 'react';
import "../../styles/ProfesionalRegister.css"

class ValidateFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false
    };
  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  render() {

    let labelClass = ["padding-label"];
    if(this.state.addClass) {
      labelClass.push('hidden');
    }

    return (
      <>
        <div class="file-field input-field input-style">
          <div class="btn">
            <span><i class="material-icons color-icon">file_copy</i></span>
            <input className="inputfile" onChange={this.toggle.bind(this)} placerholder="Rut" type="file" name="Files" accept="image/x-png,image/jpeg,image/jpg,application/pdf" />
          </div>
          <label className={labelClass.join(' ')} for="files" >{this.props.file}</label>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text"/>
          </div>
        </div>
      </>
    )
  }
}


export default ValidateFiles;