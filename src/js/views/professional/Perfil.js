import React from "react";
import '../../../styles/ProfilePro/Profilepro.css';
import { Context } from '../../store/AppContext';
import { Link } from 'react-router-dom';
import ButtonLogout from '../../component/GenericComponent/ButtonLogout';
import io from "socket.io-client";

let socket = io.connect("http://127.0.0.1:5000");

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["vero", "jose", "juan"],
      requests: []
    };

    this.waitByRequests = this.waitByRequests.bind(this);
    this.redirectUserNotAuthenticated = this.redirectUserNotAuthenticated.bind(this);
    this.getAllRequests = this.getAllRequests.bind(this);
    this.handleClickOpenChat = this.handleClickOpenChat.bind(this);
    this.setHandlingNotifications = this.setHandlingNotifications.bind(this);
    
    socket.on("connect", function() {
      socket.send("CONECTADOOOO");
    })
  };

  static contextType = Context;

  componentDidMount() {
    const { store, actions } = this.context;
    this.redirectUserNotAuthenticated(store, actions);
    this.getAllRequests(actions);
    this.waitByRequests();
    this.setHandlingNotifications(actions);
  }

  componentDidUpdate() {
    const { store, actions } = this.context;

    this.redirectUserNotAuthenticated(store, actions);
  }

  setHandlingNotifications = (actions) =>{
    actions.setHandlingNotifications();
  };

  redirectUserNotAuthenticated = (store, actions) =>{
    actions.isUserAuthenticated();
    if (store.isAuthenticated !== "true") this.props.history.push('/');
  };

  waitByRequests = () =>{
    const { actions } = this.context;

    socket.on('wait_requests', request => {
      console.log("Llego un nuevo request: " + request.channel_id);
      actions.getAllRequests();
   });
  };

  getAllRequests = (actions) =>{
    actions.getAllRequests();
  };

  handleClickOpenChat = channel_id => e => {
    console.log(channel_id)
    const { actions } = this.context;
    actions.takeRequestAndOpenChat(channel_id);
    sessionStorage.setItem("channel_id", channel_id)

    this.props.history.push('/chat');
  };

  handleCheckNotifications = (e) =>{
    const { actions } = this.context;
    let state;
    if(e.target.checked){
      state = 1;
    } else {
      state = 0;
    }
    actions.changeNotificationsState(state);
  };

  render() {
    const { store } = this.context;

    return (
      <div>
        <div className="perfil">
            <div className="container">
                <div className="row">
                    <h2 className="title-profile color-text">Mi perfil</h2>
                    <h3 className="title-autorized color-text">Perfil autorizado <span className="material-icons autorized-icon">done</span></h3>
                    {/*<h3 className="title-autorized-user">Bienvenido "Falta nombre"</h3>*/}
                    <h3 className="title-notifications color-text">Notificaciones <div className="switch">
                        <label className="label-text"> Off
                          <input onChange={this.handleCheckNotifications} type="checkbox" checked={store.able_notifications} />
                          <span className="lever"></span>
                          On
                        </label>
                    </div></h3>

                </div>
            </div>

              {
                  
                  store.requests.map((request, i) =>
                    <div key={i} className="box-links-profile">
                      <Link to="/chat" className="profile"  onClick={this.handleClickOpenChat(request.channel_id)} >
                        <span className="material-icons profile-links-icon">forum</span>
                        <span className="text_order-profile color-text profile-links-text text-body">
                            Solicitud de atención de nuevo paciente Cn: {request.channel_id}
                        </span>
                      </Link>

                    </div>
                  )
              }

            <div className="container">
                <div className="back-home-p">Salir</div>
                <ButtonLogout iconname="exit_to_app" />
            </div>
        </div>
      </div>
    );
  }
}
export default Perfil;