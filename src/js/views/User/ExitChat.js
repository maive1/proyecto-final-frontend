import React, { useContext, useEffect } from 'react';
import '../../../styles/ExitChatWindow/ExitChat.css'
import TabInformation from '../../component/ExitChatUser/TabInformation';
import TabHelpChannels from '../../component/ExitChatUser/TabHelpChannels';
import ButtonHome from '../../component/GenericComponent/ButtonHome';
import ScrollTop from '../../component/GenericComponent/ScrolltoTop';
import { Context } from '../../store/AppContext'

export default function ExitChat(props) {
    const {store, actions} =  useContext(Context)
    
    useEffect( () => {
        actions.isUserAuthenticated()
    })
    /*useEffect( () => {
        if (store.isAuthenticated !== 'true') {
            props.history.push("/")
        }
    })
    */
    return (
        <div className="view-exit" id="exit-window">
            <div className="container">
                <div className="row">
                    <div className="exit-message">Esperamos que te hayas sentido cómod@ en la conversación, y que te sientas más tranquil@. Sugerimos que busques ayuda psicológica en un centro de atención especializado. Un abrazo <i className="material-icons color-especial">favorite</i></div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m8 l4 offset-m2 offset-l2">
                    <TabInformation titleTab="Links de ayuda" />
                </div>
                <div className="col m8 l4 offset-m2">
                    <TabHelpChannels titleTab="Canales de Ayuda 24 horas" />
                </div>
            </div>
                
            <div className="row ">
                <div className="col m12 back-home-q">¿Quieres volver al inicio?</div>
                <div className="col s1 m1 l1 xl1 offset-s6 offset-m6 offset-l6 offset-xl6 btn-exit-chat">
                    <ButtonHome iconname="home"/>
                </div>
            </div>
                <div className="hide-on-large-only">
                <ScrollTop />
                </div>
        </div>        
    );
}