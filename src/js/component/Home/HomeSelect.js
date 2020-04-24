import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/Home/Home.css';

class Homeselect extends Component {
  
  handleSintomas(e) {
    if (e.target.id === "0") {
      sessionStorage.setItem("sintomas", "Dolor de estómago, dolor de cuello, nervios e inquietud.")
    }
    else if (e.target.id === "1") {
      sessionStorage.setItem("sintomas", "Incomodidad, tristeza, agitación, susto, taquicardia y escalofrío.")
    }
    else {
      sessionStorage.setItem("sintomas", "Dolor de estómago, dolor de cuello, nervios, inquietud, incomodidad, tristeza, agitación, susto, taquicardia y escalofrío.")
    }
    
  }
  
  
  render() {
    return (
      <>
        <div className="row">
          <div className="home-options-container grid-example col s12 m8 l6 offset-m2 offset-l3 center home-no-padding">
            <div className="row">
              <div className="row">
                <div className="col m7 l7 offset-m2 offset-l2 hide-on-small-only">
                  <div><img src="sources/logoblue.gif" className="imageLogo" alt="..." /></div>
                  <h4 className="title-app">Help me Now</h4>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12 home-standar-padding">
                  <h6 className="title-menu color-text">¿Qué sientes?</h6>
                  <h6 className="color-text text-subtitle center">Identifica tus síntomas con alguna opción de esta lista</h6>
                </div>
              </div>
            </div>
            <Link to='/register'>
            <div className="home-box-links">
                <i className="material-icons home-links-icon">face</i>
                <span id="0" onClick={e => this.handleSintomas(e)} className="text_order-1 color-text home-links-text text-body">Dolor de estómago, dolor de cuello, nervios, inquietud</span>
            </div>
            </Link>
            <Link to='/register'>
            <div className="home-box-links">
                <i className="material-icons home-links-icon">sentiment_very_dissatisfied</i>
                <span id="1" onClick={e => this.handleSintomas(e)} className="text_order-1 color-text home-links-text text-body">Incomodidad, tristeza, agitación, susto, taquicardia, escalofrío</span>
            </div>
            </Link>
            <Link to='/register'>
            <div className="home-box-links home-box-border-bottom">
                <i className="material-icons home-links-icon">arrow_upward</i>
                <span id="2" onClick={e => this.handleSintomas(e)} className="text_order-1 color-text home-links-text text-body">Me siento identificado/a con todos los síntomas anteriores</span>
            </div>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default Homeselect;