import React from 'react';
import '../../../styles/ExitChat.css'
import MessageCard from '../../component/MessageCard';
import TabInformation from '../../component/TabInformation';
import TabHelpChannels from '../../component/TabHelpChannels';
import ButtonHome from '../../component/ButtonHome';

export default function ExitChat() {

    let wordsmessage="Esperamos que te hayas sentido cómod@ en la conversación, y que te sientas más tranquil@. Te recordamos que la conversación fue completamente confidencial. Sugerimos que busques ayuda psicológica en un centro de atención especializado. Un abrazo"

    return (
        <div className="view-exit" id="exit-window">
            <div className="row message">
                <MessageCard message={wordsmessage}/> 
            </div>
            <div className="row">    
                <TabInformation titleTab="¿Dónde buscar ayuda?"/>
            </div>
            <div className="row">    
                <TabHelpChannels titleTab="Canales de Ayuda 24 horas"/>
            </div>
            <div className="row ">
                <ButtonHome/>  
            </div>  
        </div>
    );
}