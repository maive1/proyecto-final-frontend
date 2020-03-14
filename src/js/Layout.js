import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import injectContext from "./store/AppContext";
import Home from "./views/User/Home"
import Register from "./views/User/Register";
import Login from "./views/User/Login";
import Chat from "./views/User/Chat";
import ExitChat from "./views/User/ExitChat";
import RegisterPro from "./views/professional/RegisterPro";
import RegisterTwoPro from "./views/professional/RegisterTwoPro";
import RegisterCompletePro from "./views/professional/RegisterCompletePro";
import ChatPro from "./views/professional/ChatPro";
import ExitPro from "./views/professional/ExitPro";

export const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>	
					<Switch>
						{/*Rutas de Usuario */}
						<Route exact path="/" component={Home}/>
						<Route exact path="/register" component={Register}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/chat" component={Chat}/>
						<Route exact path="/exitchat" component={ExitChat}/>
						{/*Rutas de Profesional*/}
						<Route exact path="/registerpro" component={RegisterPro} />
						<Route exact path="/registertwopro" component={RegisterTwoPro} />
						<Route exact path="/registercompletepro" component={RegisterCompletePro} />
						<Route exact path="/chatpro" component={ChatPro} />
						<Route exact path="/exitpro" component={ExitPro} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>					
										
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);