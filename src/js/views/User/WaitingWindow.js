import React from 'react';
import ButtonHome from '../../component/GenericComponent/ButtonHome';
import MessageCard from '../../component/GenericComponent/MessageCard';
import '../../../styles/WaitingWindow/WaitingWindow.css'
import { Context } from '../../store/AppContext'
import io from "socket.io-client";
import { Link } from 'react-router-dom';

let socket = io.connect("http://127.0.0.1:5000");

class waitingWindow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        channel_id: "",
        currentUser: {},
      };
      this.redirectUserNotAuthenticated = this.redirectUserNotAuthenticated.bind(this);
      this.sendNotificationsRequestAttention = this.sendNotificationsRequestAttention.bind(this);
      this.waitingByChannel = this.waitingByChannel.bind(this);
      this.waitingByProfessional = this.waitingByProfessional.bind(this);
      this.handleExitHome = this.handleExitHome.bind(this);

      socket.on("connect", function() {
        socket.send("CONECTADOOOO");
      })
    }

    static contextType = Context;

    componentDidMount = () => {
        const { store, actions } = this.context;

        this.redirectUserNotAuthenticated(store, actions);
        this.sendNotificationsRequestAttention(store, actions);
        this.waitingByChannel(store, actions);

        setTimeout(this.petititonFailed, 300000)

    };

    waitingByProfessional = (channel_id) =>{
        console.log(sessionStorage.getItem("channel_id"));
        socket.on('wait_professional_channel_' + channel_id, info => {
            console.log("La solicitud ha sido aceptada");
            if(info.ok) this.props.history.push('/chat');
        });
    };


    waitingByChannel = (store, actions) =>{
        socket.on('wait_channel_' + store.currentUser.id, info => {
            console.log("Llego el channel: " + info.channel_id);
            if (!sessionStorage.getItem("channel_id")){
                actions.setChannelId(info.channel_id);
                this.waitingByProfessional(info.channel_id);
            };
        });

        if (sessionStorage.getItem("channel_id")){
          this.setState({channel_id: sessionStorage.getItem("channel_id")});
        };
    };

    sendNotificationsRequestAttention = (store, actions) =>{
        if (!sessionStorage.getItem("sendRequest")){
            sessionStorage.setItem("sendRequest", true);

            // Enviamos el request a todos los profesionales
            let sintomas = sessionStorage.getItem("sintomas")
            let entryHelp = { "sintomas": sintomas }
            actions.sendHelpRequest(entryHelp);

            console.log(store.currentUser);
            console.log(store.currentUser.id);
            socket.emit('new_request', {
                patient_state: sintomas,
                user_id: store.currentUser.id
            });
            console.log("Solicitud de chat enviada");
        }
    };

    redirectUserNotAuthenticated = (store, actions) =>{
        actions.isUserAuthenticated();
        if (store.isAuthenticated !== "true"){
            this.props.history.push('/');
        }else{
            this.setState({currentUser: store.currentUser});
            if (store.currentUser.user_type !== "patient"){
                this.props.history.push('/');
            }
        }
    };

    handleExitHome = (e) =>{
        const { actions } = this.context;
        actions.logout();
    };

    petititonFailed = () => {
        let path = window.location.pathname
        if(path == '/waiting-window') {
            this.props.history.push('/')
        }
    }

    render() {  
        const { store } = this.context;
    
        return (
            <div className="container">
                 <span>Solicitud Codigo {store.channel_id}</span>

                <MessageCard message="Estamos a unos segundos de que tu solicitud sea atendida. Respira, inhala y exhala." />
                <div className="video-message">Te recomendamos que veas este video mientras esperas.<i className="material-icons color-especial">favorite</i></div>

                <div className="video-container">
                    <video className="responsive-video" controls autoPlay>
                        <source src="Sources/Guía para calmar mentes en crisis.mp4" type="video/mp4" />
                    </video>
                </div>

                <h4 className="title-back-home">Sientete con la libertad de volver al inicio si no quieres iniciar la conversación</h4>

                <div className="col s1 l1 push-s5 push-l6 ">

                    <div className="col s">
                        <Link  onClick={this.handleExitHome} className="icon-exit color-icons waves-effect waves-circle btn-small lighten-2" to="/"><i className="material-icons">home</i></Link>
                    </div>

                </div>
            </div>
        );
    }
  }

export default waitingWindow;

