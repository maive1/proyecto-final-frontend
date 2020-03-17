import React from 'react';
import PropTypes from "prop-types";
import LinkInformation from '../component/LinkInformation';

const TabHelpChannels = (props) => {

    return (
        <>
            <div className="col l3"></div>
            <div className="col l6 s12">
            <h1 className="center-align">{props.titleTab}</h1>
                <div className="collection blue lighten-2">
                    <LinkInformation infoUrl="tel: 600 360 7777" nameLink="Salud Responde 600 360 7777"/>     
                    <LinkInformation infoUrl="tel: 1412" nameLink="Fono Drogas y Alcohol 1412"/>
                    <LinkInformation infoUrl="tel: 1455" nameLink="Fono Orientación y Ayuda Violencia contra las mujeres 1455"/>
                </div>
            </div>
            <div className="col l3"></div>
        </>
    );
}

TabHelpChannels.propTypes = {
    titleTab: PropTypes.string.isRequired
}

export default TabHelpChannels;