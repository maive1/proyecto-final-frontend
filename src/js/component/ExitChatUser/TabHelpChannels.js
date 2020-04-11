import React from 'react';
import PropTypes from "prop-types";
import LinkInformation from './LinkInformation';

const TabHelpChannels = (props) => {

    return (
        <>
            <h1 className="title-exit">{props.titleTab}</h1>
            <div className="collection links-info">
                <LinkInformation infoUrl="tel: 600 360 7777" nameLink="Salud Responde 600 360 7777" />
                <LinkInformation infoUrl="tel: 1412" nameLink="Fono Drogas y Alcohol 1412" />
                <LinkInformation infoUrl="tel: 1455" nameLink="Fono Orientación y Ayuda Violencia contra las mujeres 1455" />
            </div>
        </>
    );
}

TabHelpChannels.propTypes = {
    titleTab: PropTypes.string.isRequired
}

export default TabHelpChannels;