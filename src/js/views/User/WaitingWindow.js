import React, { useContext, useEffect } from 'react';
import ButtonHome from '../../component/GenericComponent/ButtonHome';
import MessageCard from '../../component/GenericComponent/MessageCard';
import '../../../styles/WaitingWindow/WaitingWindow.css'
import { Context } from '../../store/AppContext'



export default function WaitingWindow (props) {

    let waitingMessage = "Estamos a unos segundos de que tu solicitud sea atendida. Respira, inhala y exhala."
    const {store, actions} =  useContext(Context)


    return (
        <div className="container">

            <MessageCard message={waitingMessage} />
            <div className="video-message">Te recomendamos que veas este video mientras esperas.<i className="material-icons color-especial">favorite</i></div>

            <div className="video-container">
                <video className="responsive-video" controls autoPlay>
                    <source src="Sources/Guía para calmar mentes en crisis.mp4" type="video/mp4" />
                </video>
            </div>

            <h4 className="title-back-home">Sientete con la libertad de volver al inicio si no quieres iniciar la conversación</h4>

            <div className="col s1 l1 push-s5 push-l6 ">
                <ButtonHome iconname="home"/>
            </div>
        </div>
    );
}