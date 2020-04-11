import React from 'react';
import '../../../styles/ExitChatWindow/ExitChat.css'
import TabInformation from '../../component/ExitChatUser/TabInformation';
import TabHelpChannels from '../../component/ExitChatUser/TabHelpChannels';
import ButtonHome from '../../component/GenericComponent/ButtonHome';
import ScrollTop from '../../component/GenericComponent/ScrolltoTop';

export default function ExitChat() {

    return (
        <div className="view-exit" id="exit-window">
            <div className="container">
                <div className="row">
                    <div className="exit-message">Esperamos que te hayas sentido cómod@ en la conversación, y que te sientas más tranquil@. Sugerimos que busques ayuda psicológica en un centro de atención especializado. Un abrazo <i className="material-icons color-especial">favorite</i></div>
                </div>
            </div>
            <div className="row">
                <TabInformation titleTab="Links de ayuda" />
            </div>
                <TabHelpChannels titleTab="Canales de Ayuda 24 horas" />
            <div className="row">
                <div className="back-home-q">¿Quieres volver al inicio?</div>
                <ButtonHome iconname="home"/>
            </div>
                <ScrollTop />
        </div>        
    );
}