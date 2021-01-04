import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
	render() {
		return (
			<div className="main">
				<div className="login-container">
					<form>
						<label for="username"></label>
						<input
							type="text"
							placeholder="Enter Username"
							name="username"
							required
						></input>

						<label for="password"></label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							required
						></input>
						<button className="form-button" type="submit">
							Log In
						</button>
					</form>
               <div className="login-footer">
                  <Link to="/sign-up">Create an Account</Link>
               </div>
					
				</div>
			</div>
		);
	}
}
