import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/AppContext";
import Home from "./views/User/Home"
import Register from "./views/User/Register";
import Login from "./views/User/Login";
import WaitingWindow from "./views/User/WaitingWindow";
import Chat from "./views/Chat";
import ExitChat from "./views/User/ExitChat";
import HomeMenu from "./views/User/HomeMenu";
import LoginPro from "./views/professional/LoginPro";
import RegisterPro from "./views/professional/RegisterPro";
import Perfil from "./views/professional/Perfil";
import ExitPro from "./views/professional/ExitPro";
import PasswordRecovery from "./views/PasswordRecovery";
import Materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

Materialize.AutoInit();

export const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>	
			
					<Switch>
						{/*Rutas de Usuario */}
						<Route exact path="/" component={Home}/>
						<Route exact path="/homemenu" component={HomeMenu}/> 
						<Route exact path="/register" component={Register}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/ForgotPassword" component={PasswordRecovery}/>
						<Route exact path="/waiting-window" component={WaitingWindow}/>
						<Route exact path="/exitchat" component={ExitChat}/>
						{/*Rutas de Profesional*/}
						<Route exact path="/registerpro" component={RegisterPro} />
						<Route exact path="/loginpro" component={LoginPro} />
						<Route exat path="/perfil" component={Perfil}/>
						<Route exact path="/exitpro" component={ExitPro} />
						<Route exact path="/chat" component={Chat}/>
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>					
										
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);