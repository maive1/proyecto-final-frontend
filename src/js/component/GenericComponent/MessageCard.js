import React from 'react';
import PropTypes from "prop-types";

const MessageCard = (props) => {

    return (
        <div className="card-message">
            <div className="col s12 l12">
                <div className="card-panel-waiting z-depth-1 center" id="final-message">
                    <span className="color-text"><h4>{props.message}</h4></span>
                </div>
            </div>
        </div>
    );
}

MessageCard.propTypes = {
    message: PropTypes.string.isRequired
}

export default MessageCard;