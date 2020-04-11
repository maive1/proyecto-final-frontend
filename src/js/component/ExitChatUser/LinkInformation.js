import React from 'react';
import PropTypes from "prop-types";

const LinkInformation = (props) => {

    return (
        <a href={props.infoUrl} className="collection-item links-info" target="_blank" rel="noopener noreferrer">{props.nameLink}</a>
    );   
}

LinkInformation.propTypes = {
    infoUrl: PropTypes.string.isRequired,
    nameLink: PropTypes.string.isRequired
}

export default LinkInformation;