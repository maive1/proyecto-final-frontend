import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../../../styles/GroupChat.css';

class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["vero", "jose", "juan"]};
  }
  render(){
    return(
      <div className="perfil">
          <nav className="nav-extended blue lighten-2">
            <div className="nav-wrapper row title">
              <div className="col s1 icon">
                <Link className="link" to="/register">
                  <i className="material-icons">keyboard_arrow_left</i>
                </Link>
              </div>
              <div className="col s10 center">
                <h1>Perfil</h1>
              </div>
            </div>
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><a href="#test1">Ajustes</a></li>
                <li className="tab"><a href="#test2">Historial de Conversaciones</a></li>
              </ul>
            </div>
          </nav>
          <div id="test1" class="col s12">
            <div className="collection">
            {this.state.users.map((user,i)=>{
                    return <a href='/#' className="collection-item" key={i}>{user}</a>
                })}
            </div>
          </div>
          <div id="test2" class="col s12"></div>       
        
      </div>
    );
  }
}
export default GroupChat;