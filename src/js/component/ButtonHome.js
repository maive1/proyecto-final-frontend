import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const ButtonHome = (props) => {
    
    return (
        <>
            <div className="col s10"></div>
            <div className="col s">
                <Link className="icon-exit waves-effect waves-circle btn-small deep-purple lighten-2 " to="/"><i class="material-icons" id="icon-home">home</i></Link>
            </div>
            
        </>
    );   
}

ButtonHome.propTypes = {
    butonUrl: PropTypes.string.isRequired,
    butonName: PropTypes.string.isRequired
}

export default ButtonHome;