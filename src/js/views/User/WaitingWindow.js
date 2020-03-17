import React from 'react';
import '../../../styles/WaitingWindow.css'
import ButtonHome from '../../component/ButtonHome';
import MessageCard from '../../component/MessageCard';


export default function waitingWindow () {
    let waitingMessage="Estamos a unos segundos de que tu solicitud sea atendida. Respira, inhala y exhala. Te recomendamos que veas el video mientras esperas."
    
    return (
        <div className="waitingWindow">
            <div className="row message">
                <MessageCard message={waitingMessage}/> 
            </div>
            <div className="row video">
                <div className="col s12 l10 push-l1">          
                    <div className="video-container">
                        <video className="responsive-video" controls autoPlay>
                            <source src={require('../../../styles/Guía para calmar mentes en crisis.mp4')} type="video/mp4"/>
                        </video>
                    </div>
                </div>                  
            </div>
            <div className="row buttonHome">
                <div className="col s10 push-s1 center">
                    <h1>Sientete con la libertad de volver al inicio si no quieres iniciar la conversación</h1>
                </div>  
            </div>
            <div className="row">
                <div className="col s1 l1 push-s5 push-l6 ">
                    <ButtonHome/>
                </div>
            </div>
        </div>
    );
}