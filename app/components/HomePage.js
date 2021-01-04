import React, { Component } from "react";
import {Link} from "react-router-dom"

class HomePage extends Component {
   render() {
      return (
				<div className="main">
               <h1>Welcome to Moodio!</h1>
               <h2>Log in to start training your model</h2>
					<div className="homepage-container">
					<button className="form-button">
						<Link to="/log-in">Log In</Link>
					</button>
					<button className="form-button">
						<Link to="/sign-up">Sign Up</Link>
					</button>
               </div>
				</div>
			);
   }
}

export default HomePage