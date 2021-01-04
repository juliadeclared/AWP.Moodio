import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./Main"
import HomePage from "./HomePage"


const Routes = () => {
	return (
		<Router>
			<div>
				<nav></nav>
				<main>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/main" component={Main} />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default Routes;