import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Signup extends Component {
   render() {
      return (
				<div>
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

								<label for="password"></label>
								<input
									type="password"
									placeholder="Confirm Password"
									name="confirm-password"
									required
								></input>

								<button className="form-button" type="submit">
									Sign Up
								</button>
							</form>
							<div className="login-footer">
								Already have an account? <Link to="/log-in">Log In</Link>
							</div>
						</div>
					</div>
				</div>
			);
   }
}
