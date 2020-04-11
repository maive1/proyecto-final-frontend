import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/Home/Home.css';

class Homeselect extends Component {

render() {
  return (
    <>
      <div className="row">
        <div className="home-options-container grid-example col s12 m12 home-no-padding">

          <div className="row">
            <div className="col s12 m12 home-standar-padding">
              <h4 className="title-menu color-text">¿Qué sientes?</h4>
              <h6 className="color-text text-subtitle">Identifica tus síntomas con alguna opción de esta lista</h6>
            </div>
          </div>

          <div className="home-box-links">
            <Link className="home-links" to="/register">
              <i className="material-icons home-links-icon">face</i>
              <span className="text_order-1 color-text home-links-text text-body">Dolor de estómago, dolor de cuello, nervios, inquietud</span>
            </Link>
          </div>


          <div className="home-box-links">
            <Link className="home-links" to="/register">
              <i className="material-icons home-links-icon">sentiment_very_dissatisfied</i>
              <span className="text_order-1 color-text home-links-text text-body">Incomodidad, tristeza, agitación, susto, taquicardia, escalofrío</span>
            </Link>
          </div>

          <div className="home-box-links home-box-border-bottom">
            <Link className="home-links" to="/register">
              <i className="material-icons home-links-icon">arrow_upward</i>
              <span className="text_order-1 color-text home-links-text text-body">Me siento identificado/a con todos los síntomas anteriores</span>
            </Link>
          </div>

        </div>
      </div>
    </>
    )
  }
}

export default Homeselect;