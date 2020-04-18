import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHome = (props) => {

    return (
        <>
            <div className="col s1 l1 offset-5">
                <div className="row">
                    <Link className="icon-exit color-icons waves-effect waves-circle btn-small lighten-2" to="/"><i className="material-icons">{props.iconname}</i></Link>
                </div>
            </div>
        </>
    );
}

export default ButtonHome;