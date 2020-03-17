import React from 'react';
import PropTypes from "prop-types";
import LinkInformation from '../component/LinkInformation';

const TabInformation = (props) => {

    return (
        <>
            <div className="col l3"></div>
            <div className="col l6 s12">
                <h1 className="center-align">{props.titleTab}</h1>
                <div className="collection blue lighten-2">
                    <LinkInformation infoUrl="http://www.todomejora.org/docs/ayuda/COSAM.pdf" nameLink="Centros de Salud Mental (COSAM) - Atención Primaria "/>     
                    <LinkInformation infoUrl="https://todomejora.org/" nameLink="Fundación Todo Mejora"/>
                    <LinkInformation infoUrl="https://centroarbol.cl/" nameLink="Centro Árbol"/>
                    <LinkInformation infoUrl="https://chilepsicologos.cl/" nameLink="Chile Psicólogos"/> 
                    <LinkInformation infoUrl="https://www.ceapsi.cl/" nameLink="Centro de Atención Psicológica Integral"/>      
                </div>
            </div>
            <div className="col l3"></div>
        </>
    );
}

TabInformation.propTypes = {
    titleTab: PropTypes.string.isRequired
}

export default TabInformation;