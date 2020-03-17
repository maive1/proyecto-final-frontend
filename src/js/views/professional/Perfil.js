import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../../../styles/GroupChat.css';
import NavPerfil from "../../component/Perfil/NavPerfil";
import FilesUser from "../../component/Perfil/FilesUser";

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["vero", "jose", "juan"]};
  }
  render(){
    return(
      <div className="perfil">
          <NavPerfil/>
          <FilesUser/> 
      </div>
    );
  }
}
export default Perfil;