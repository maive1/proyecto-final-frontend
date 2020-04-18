import React from 'react';
import { Link } from "react-router-dom";
import '../../../styles/Home/Home.css';

class MessageHome extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col s12 m8 l6 offset-m2 offset-l3">
            <div className="card-panel card_info row">
              <div className="col s10 m9 l10 offset-m2 offset-l2">
                <div><img src="sources/logoblue.gif" className="imageLogo" alt="..." /></div>
                <h4 className="title-app">Help me Now</h4>
              </div>
              <div className="col s12 m12 l12 description">
                <h6 className="welcome-text color-text">Bienvenido/a</h6>
                <span className="color-text text-body-home">Queremos atenderte lo más rápido posible, recuerda que nuestros profesionales abordarán tu situación de forma confidencial.</span>
                <div className="card-panel card_info letters">Siéntete seguro/a como Doggie al usar nuestro canal de comunicación.</div>
              </div>
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