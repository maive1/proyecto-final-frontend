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
            <div className="row waiting-container">
                <div className="col s12 m8 l6 offset-m2 offset-l3">
                    <div className="row">
                        <div className="col s12 l12">
                            <MessageCard message={waitingMessage} />
                        </div>
                    </div>
                    <div className="video-container">
                        <video className="responsive-video" controls /*autoPlay*/>
                            <source src="Sources/Guía para calmar mentes en crisis.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="row icon-home">
                        <div className="col s1 l2">
                            <ButtonHome iconname="home"/>
                        </div>  
                        <div className="col s10 l8">                        
                            <h4 className="title-back-home">Sientete con la libertad de volver al inicio si no quieres iniciar la conversación</h4>
                        </div>                                              
                    </div>
                </div>
            </div>
        </div>
    );
}