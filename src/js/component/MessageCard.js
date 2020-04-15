import React from 'react';
import PropTypes from "prop-types";

const MessageCard = (props) => {
    return (  
            <div className="card">
                <div className="col s1 l3"></div>
                <div className="col s10 l6">
                    <div className="card-panel z-depth-1 center" id="final-message">
                        <span className="white-text deep-purple-text text-lighten-2">{props.message}<i class="material-icons">favorite</i></span>
                    </div>
                </div>      
                <div className="col s1 l3"></div>
            </div>      
    );
}

MessageCard.propTypes = {
    message: PropTypes.string.isRequired
}

export default MessageCard;