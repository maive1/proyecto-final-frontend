import React from 'react';
import PropTypes from "prop-types";

const MessagesList = (props) => {

    return (  
        <div className="view-messages row">  
            <ul className="col s12 l6">
                {props.messages.length > 0 &&
                    props.messages.map(msg => (
                        <li className="card-message">
                            <div><p>{msg}</p></div>                        
                        </li>
                ))}
            </ul>
        </div>       
    );
}

MessagesList.propTypes = {
    messages: PropTypes.array.isRequired,
}

export default MessagesList;