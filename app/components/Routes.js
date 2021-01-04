import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Main from "./Main"
import HomePage from "./HomePage"
import Login from "./Login";
import Signup from "./Signup";



const Routes = () => {
	return (
		<Router>
			<div>
				<nav>
               <li>
                  <Link to="/">Home</Link>
               </li>
            </nav>
				<main>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/sign-up" component={Signup} />
						<Route exact path="/log-in" component={Login} />
						<Route exact path="/main" component={Main} />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default Routes;