import React, { useContext, useEffect } from 'react'
import TabInformation from '../../component/ExitChatUser/TabInformation';
import TabHelpChannels from '../../component/ExitChatUser/TabHelpChannels';
import ButtonHome from '../../component/GenericComponent/ButtonHome';
import ScrollTop from '../../component/GenericComponent/ScrolltoTop';
import { Context } from '../../store/AppContext'


export default function NoProsFound(props) {
    const { store, actions } = useContext(Context)
    const sintomas = sessionStorage.getItem("sintomas")
            const entryHelp = {
                "sintomas": sintomas
            }

    function retryRequest() {
        actions.sendHelpRequest(entryHelp)
        props.history.push('/waiting-window')
    }
    /*
    useEffect( () => {
        actions.isUserAuthenticated()
        if (store.isAuthenticated !== 'true') {
            props.history.push("/")
        }
    })
    */
    return (
        <div className="view-exit" id="exit-window">
            <div className="container">
                <div className="row">
                    <div className="exit-message">Al parecer ningún profesional ha podido atender tu solicitud. Aquí tienes unos enlaces que te pueden ser de ayuda</div>
                </div>
            </div>
            <div className="row">
                <div className="col l4 offset-l2">
                    <TabInformation titleTab="Links de ayuda" />
                </div>
                <div className="col l4">
                    <TabHelpChannels titleTab="Canales de Ayuda 24 horas" />
                </div>
            </div>
            <div className="row button-nonepro">
                <div className="col l1 offset-l8 back-home-q"><h6>Volver a inicio</h6></div>
                <div className="col l1">
                    <ButtonHome iconname="home" />
                </div>
            </div>
            <div className="row button-nonepro">
                <div className="col l1 offset-l8 back-home-q new-chance">Reintentar petición</div>
                <div className="col l1 ">
                    <p className="icon-exit color-icons waves-effect waves-circle btn-small lighten-2" onClick={(e) => retryRequest()}><i className="material-icons">cached</i></p>
                </div>
                
            </div>
            <div className="hide-on-large-only">
                <ScrollTop />
            </div>
        </div>
    )
}