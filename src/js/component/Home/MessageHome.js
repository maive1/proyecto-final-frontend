import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/Home/Home.css';

class MessageHome extends Component {

  render() {
    return (
      <>
        <div className="row">

          <div className="col s12 m12">
            <div className="card-panel card_info">
              <div><img src="sources/logoblue.gif" className="imageLogo" alt="..." /></div>
              <h4 className="title-app">Help me Now</h4>
              <h6 className="welcome-text color-text">Bienvenido/a</h6>
              <span className="color-text text-body-home">Queremos atenderte lo más rápido posible, recuerda que nuestros profesionales abordarán tu situación de forma confidencial.</span>
              <div className="card-panel card_info letters">Siéntete seguro/a como Doggie al usar nuestro canal de comunicación.</div>
            </div>

            <div className="card-panel image_card"></div>

            <Link className="link-style-next" to="/homemenu"><div className="icon-next-letter">Comencemos</div><i className="material-icons icon-next">arrow_forward_ios</i></Link>

            <Link className="link_style text-body" to="/loginpro">Soy profesional</Link>

            <i className="material-icons proiconstyle">account_circle</i>
          </div>

        </div>
      </>
    )
  }
}

export default MessageHome;