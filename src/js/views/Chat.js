import React from 'react';
import io from "socket.io-client";
import '../../styles/Chat.css';
import InfoChatNav from '../component/Chat/InfoChatNav';
import InputMessage from '../component/Chat/InputMessage';
import MessagesList from '../component/Chat/MessagesList';

let endPoint = "http://localhost:5000";
let socket = io.connect(`${endPoint}`);

class Chat extends React.Component {
    constructor(props) {
      super(props);        
      this.state = {
          message:'',
          messages: ['Hola, mi nombre es...'],
          nameUsuario: '',
          nameProfesional: '',
      };
      this.getMessages = this.getMessages.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleClickAddMessage = this.handleClickAddMessage.bind(this);
    }

    componentDidMount = () => {
        this.getMessages();
    };

    getMessages = () => {
        socket.on("message", msg => {
          this.setState({
            messages: [...this.state.messages, msg]
          });
        });  
    };
 
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });  
    };

    handleKeyPress = (e) =>{
        const { message } = this.state;
        if(e.keyCode === 13 && e.target.value !== ''){
            this.setState({
                message: ""
                });
                socket.emit("message", message);
            } else {
                console.log("No ha escrito un mensaje");
            }
    };

    handleClickAddMessage = (e) =>{
        const { message } = this.state;
        if (message !== "") {
            this.setState({
            message: ""
            });
            socket.emit("message", message);
        } else {
            console.log("No ha escrito un mensaje");
        }
    };

    render() {
        const { messages, message } = this.state;
        return (
            <div className="wrapper">  
                <InfoChatNav nameUsuario="NOMBRE USUARIO"/>   
                <MessagesList messages={messages}/>            
                <InputMessage
                    onChange={(e)=>this.handleChange(e)} 
                    onKeyPress={(e)=>this.handleKeyPress(e)} 
                    onClick={(e)=>this.handleClickAddMessage(e)}
                    value={message} 
                    name="message"
                />
            </div>
        );
    }
  }

export default Chat;