import React from 'react';
import PropTypes from "prop-types";

const InputMessage = (props) => {
    return (  
        <div className="row input-chat blue lighten-2 z-depth-3">
            <form className="col s12 form" onSubmit={props.onSubmit}>
                <div className="row">
                    <div className=" col s11">                                
                        <input 
                            className="msg_input" 
                            type="text" 
                            name={props.name} 
                            value={props.value} 
                            placeholder="Escribir mensaje aquí" 
                            onChange={props.onChange}  
                            onKeyPress={props.onKeyPress}
                        />            
                    </div>
                    <div className="col s1">
                        <button 
                            className="deep-purple lighten-2 btn-floating z-depth-2" 
                            onClick={props.onClick}>
                            <i className="material-icons left">send</i>
                        </button>
                    </div>
                </div>
            </form>      
        </div>
    );
}

InputMessage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default InputMessage;