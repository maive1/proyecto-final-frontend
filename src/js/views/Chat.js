import React from 'react';
import io from "socket.io-client";
import '../../styles/ChatWindow/Chat.css';
import { Link } from "react-router-dom";
import { Context } from '../store/AppContext';
let socket = io.connect("http://127.0.0.1:5000");

class Chat extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        channel_id: null,
        currentUser: {},
        message: "",
        messages: [],
      };
      this.getMessagesOnline = this.getMessagesOnline.bind(this);
      this.handleClickAddMessage = this.handleClickAddMessage.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
      this.redirectUserNotAuthenticated = this.redirectUserNotAuthenticated.bind(this);
      this.setChannelByUser = this.setChannelByUser.bind(this);
      this.openChatToPatient = this.openChatToPatient.bind(this);
      this.attentiveCloseChannel = this.attentiveCloseChannel.bind(this);     

      socket.on("connect", function() {
        socket.send("CONECTADO");
      })

    }

    static contextType = Context;

    componentDidMount = () => {
        const { store, actions } = this.context;
        //this.redirectUserNotAuthenticated(store, actions);    
        this.setChannelByUser(store, actions);
        this.getAllMessages(actions);
        this.openChatToPatient(store);
        this.getMessagesOnline(store, actions);
    };

    componentDidUpdate = () => {
        this.scrollToBottom();
    }

    attentiveCloseChannel = (store, actions) => {
        let user_type = store.currentUser.user_type;
        let channel_id = store.channel_id;
        console.log("escuchando el channel: "+ channel_id);
        console.log("como: "+ user_type);

        socket.on('channel_closed_' + channel_id, info => {
            console.log("se ha cerrado el chat: " + channel_id);
            console.log("como: "+ user_type);
            console.log("estado del chat: " + info.state);

            if(info.state === "closed" && user_type === "professional") {
                actions.cleanChannel();
                this.props.history.push('/perfil');
            }else if(info.state === "closed" && user_type === "patient") {
                this.props.history.push('/exitchat');
                actions.logout();
            };
        });
    };

    openChatToPatient = (store) => {
        if (store.currentUser && store.currentUser.user_type === "professional"){
            socket.emit('open_chat_to_patient', {
                channel_id: store.channel_id
            });
            console.log("Abierto el chat para el paciente");
        }
    };

    redirectUserNotAuthenticated = (store, actions) =>{
        actions.isUserAuthenticated();
        if (store.isAuthenticated !== "true"){
            this.props.history.push('/');
        }else{
            this.setState({currentUser: store.currentUser});
        }
    };

    setChannelByUser = (store, actions) => {
        actions.isUserImChannel();
        if (!store.channel_id){
            this.props.history.push('/perfil');
        }else{
            this.setState({channel_id: store.channel_id});
        }
    };

    getAllMessages = (actions) =>{
        let channel_id = sessionStorage.getItem("channel_id");
        actions.getAllMessages(channel_id);
    };

    classNameBubbleBy = (user_id) =>{
        if(parseInt(user_id) === parseInt(this.state.currentUser.id)){
            return "right-bubble";
        }else{
            return "left-bubble";
        }
    };

    UserTalk = (user_id) =>{
        if(parseInt(user_id) === parseInt(this.state.currentUser.id)){
            return "Tu:";
        }else{
            if(this.state.currentUser.user_type === "professional"){
                return "Paciente:";
            }else{
                return "Profesional:";
            }
        }
    };

    getMessagesOnline = (store, actions) => {
        //escucha los mensajes que son emitidos en el chat
        socket.on('channel-' + store.channel_id, message => {
            console.log("Llego un nuevo mensaje: " + message.user_id);
            actions.recibeNewMessage(message);
            this.setState({messages: store.messages});
        });
        this.attentiveCloseChannel(store, actions);
    };

    handleChangeMessage = (e) =>{
        this.setState({message: e.target.value});
    };

    handleClickExitChat = (e) =>{
        const { store, actions } = this.context;
        actions.closeChannel();
        socket.emit('closed_channel', { channel_id: store.channel_id });

        if(store.currentUser.user_type === "professional"){
            this.props.history.push('/perfil');
        }else{
            actions.logout();
            this.props.history.push('/exitchat');
        }
    };

    handleClickAddMessage = (e) =>{
        e.preventDefault();
        if (this.state.message !== "") {
            // Enviamos el nuevo mensaje
            let data = {
                channel_id: this.state.channel_id,
                user_id: this.state.currentUser.id,
                text: this.state.message
            }
            socket.emit('new_message', data);

            console.log("Mensaje enviado");
            console.log(data);
            console.log("este es el mensaje: " + this.state.message);
        } else {
            console.log("No ha escrito un mensaje");
        }
        // Clear text
        this.setState({message: ""});
        document.getElementById("message").value = "";
    };

    scrollToBottom = () =>{
        let container = document.getElementById('chatList')
        container.scrollTop = container.scrollHeight
    };


    render() {  
        const { store } = this.context;

        return (
            <div className="wrapper">

            <Link className="" to="/exitchat" onClick={this.handleClickExitChat}>
                <div className="exit-chat-letters color-text exit-button-chat">Abandonar chat</div>
            </Link>

            <i className="material-icons icon-active-chat">done_all</i>
            <div className="status-active-letter">Chat inciado</div>

            <div className="border-bottom-chat"></div>
                
                <div className="view-messages row" id="chatList">  
                    <ul className="col s12 l6">
                        {
                            
                            store.messages.map((msg,i) =>
                            <li key={i} className={this.classNameBubbleBy(msg.user_id)}>
                                    <div>
                                        <span>{this.UserTalk(msg.user_id)}</span>
                                        <span>Mensaje: {msg.text}</span>
                                    </div>
                                </li>
                            )
                            
                        }
                    </ul>
                </div>   

                <div className="row input-chat color-icons">
                    <form className="col s12 form" onSubmit={this.handleClickAddMessage}>
                        <div className="row">
                            <div className=" col s10">  
                                <input 
                                    className="msg_input style-chat-input" 
                                    id="message"
                                    type="text" 
                                    name="message"
                                    placeholder="Escribe un mensaje" 
                                    onChange={this.handleChangeMessage}
                                 />  
                            </div>
                            <div className="col s1">
                                <button 
                                    className="btn-floating z-depth-2 button-chat-style text-send" 
                                    onClick={this.handleClickAddMessage}>
                                    <i className="material-icons left icon-send-text">send</i>
                                </button>
                            </div>
                        </div>
                    </form>      
                </div>
            </div>
        );
    }
  }

export default Chat;