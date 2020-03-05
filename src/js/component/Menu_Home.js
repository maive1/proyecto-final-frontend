import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../styles/Home.css';

class MenuHome extends Component {

render() {
    return (
      <>
        <div className="row">
          <div className="grid-example col s12 m12">

            <div className="row">
              <div className="col s12 m12">
                <div><img src="image/logo.png" className="imageLogo" alt="..." /></div>
                <h4 className="title-home">Hola, ¿Qué sientes?</h4>
                <span className="color-text">De estos síntomas, con cuales te identificas:</span>
              </div>
            </div>

            <div>
              <Link className="btn-floating waves-effect waves-light" to="/register">
                <i className="material-icons">face</i>
              </Link>
              <span className="text_order-1 color-text">Dolor de estómago, dolor de cuello, nervios,</span>
            </div><div className="text_order-2 color-text">inquietud.</div>

            <div>
              <Link className="btn-floating waves-effect waves-light" to="/register">
                <i className="material-icons">face</i>
              </Link>
              <span className="text_order-1 color-text">Incomodidad, tristeza, agitación, susto</span>
            </div><div className="text_order-2 color-text">taquicardia, escalofrío.</div>

            <div>
              <Link className="btn-floating waves-effect waves-light" to="/register">
                <i className="material-icons">face</i>
              </Link><span className="text_order-1 color-text">Me siento identificado/a con las 2 anteriores.</span>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <div className="card-panel card_info">
              <span className="color-text-2">Queremos atenderte inmediatamente, nuestros profesionales abordarán tu situación de forma confidencial.
              </span>
              <div className="card-panel card_info letters">Siéntete seguro/a como Doggie al usar nuestro canal de comunicación.</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <div className="card-panel image_card"></div>
            <div><i className="material-icons proiconstyle">account_circle</i><Link className="link_style" to="/registerpro">Soy profesional</Link></div>
          </div>
        </div>
      </>
    )
  }
}

export default MenuHome;