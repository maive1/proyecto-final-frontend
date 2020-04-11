import React from 'react';
import PropTypes from "prop-types";
import LinkInformation from './LinkInformation';

const TabInformation = (props) => {

    return (
        <>
            <h1 className="title-exit">{props.titleTab}</h1>
            <div className="collection links-info">
                <LinkInformation infoUrl="http://www.todomejora.org/docs/ayuda/COSAM.pdf" nameLink="Centros de Salud Mental (COSAM)" />
                <LinkInformation infoUrl="https://todomejora.org/" nameLink="Fundación Todo Mejora" />
                <LinkInformation infoUrl="https://centroarbol.cl/" nameLink="Centro Árbol" />
                <LinkInformation infoUrl="https://chilepsicologos.cl/" nameLink="Chile Psicólogos" />
                <LinkInformation infoUrl="https://www.ceapsi.cl/" nameLink="Centro de Atención Psicológica Integral" />
            </div>
        </>
    );
}

TabInformation.propTypes = {
    titleTab: PropTypes.string.isRequired
}

export default TabInformation;