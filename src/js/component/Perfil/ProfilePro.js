import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLogout from '../GenericComponent/ButtonLogout';

const Profilepro = (props) => {
    return (
        <div className="perfil">
            <div className="container">
                <div className="row">
                    <h2 className="title-profile color-text">Mi perfil</h2>
                    <h2 className="title-autorized color-text">Perfil autorizado <span className="material-icons autorized-icon">done_outline</span></h2>
                    <h2 className="title-notifications color-text">Notificaciones <div className="switch">
                        <label className="label-text"> Off
                        <input type="checkbox" />
                            <span className="lever"></span>On
                        </label>
                    </div></h2>

                </div>
            </div>
            <div className="box-links-profile">
                <Link className="profile" to="/chat">
                    <span className="material-icons profile-links-icon">forum</span>
                    <span className="text_order-profile color-text profile-links-text text-body">Conversación 1 chat-io-test</span>
                </Link>
            </div>
            <div className="box-links-profile">
                <Link className="profile" to="/chat">
                    <span className="material-icons profile-links-icon">forum</span>
                    <span className="text_order-profile color-text profile-links-text text-body">Conversación 2 chat-io-test</span>
                </Link>
            </div>
            <div className="box-links-profile">
                <Link className="profile" to="/chat">
                    <span className="material-icons profile-links-icon">forum</span>
                    <span className="text_order-profile color-text profile-links-text text-body">Conversación 3 chat-io-test</span>
                </Link>
            </div>
            <div className="box-links-profile">
                <Link className="profile" to="/chat">
                    <span className="material-icons profile-links-icon">forum</span>
                    <span className="text_order-profile color-text profile-links-text text-body ">Conversación 4 chat-io-test</span>
                    <div className="profile-box-border-bottom"></div>
                </Link>
            </div>
            <div className="container">
                <div className="back-home-p">Salir</div>
                <ButtonLogout iconname="exit_to_app" />
            </div>
        </div>
    );
}


export default Profilepro;