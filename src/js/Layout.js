import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import injectContext from "./store/appContext";
import injectContext from "./store/appContext";

export const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
							
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>					
										
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);