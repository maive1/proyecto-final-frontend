import React from 'react';
import PropTypes from "prop-types";

const MessageCard = (props) => {

    return (
        <div className="card-message">
            <div className="col s10 l6">
                <div className="card-panel-waiting z-depth-1 center" id="final-message">
                    <span className="color-text">{props.message}</span>
                </div>
            </div>
        </div>
    );
}

MessageCard.propTypes = {
    message: PropTypes.string.isRequired
}

export default MessageCard;