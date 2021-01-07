import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../redux/user";
import Avatar from "avataaars";

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			method: "sign-up",
			errorMessage: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	async handleSubmit(e) {
		e.preventDefault();
		const email = this.state.email;
		const password = this.state.password;
		const confirmPassword = this.state.confirmPassword;
		const method = this.state.method;

		if (password === confirmPassword) {
			try {
				await this.props.auth(email, password, method);
			} catch (error) {
				this.setState({ errorMessage: error.response.data });
			}
		} else {
         this.setState({errorMessage: "Passwords must match"})
      }
	}

	render() {
      const avatar = {
				width: "200px",
				height: "200px",
				alignSelf: "center",
         };
         
		return (
			<div>
				<div className="main">
					<div className="login-container">
						<Avatar
                     style={avatar}
							avatarStyle="Circle"
							topType="ShortHairShortRound"
							accessoriesType="Round"
							hairColor="Auburn"
							facialHairType="MoustacheFancy"
							facialHairColor="BrownDark"
							clotheType="ShirtVNeck"
							clotheColor="Gray01"
							eyeType="Side"
							eyebrowType="AngryNatural"
							mouthType="Smile"
							skinColor="Brown"
						/>
						<form>
							<label htmlFor="email"></label>
							<input
								type="text"
								placeholder="Enter Email"
								name="email"
								required
								onChange={this.changeHandler}
							></input>

							<label htmlFor="password"></label>
							<input
								type="password"
								placeholder="Enter Password"
								name="password"
								required
								onChange={this.changeHandler}
							></input>

							<label htmlFor="confirmPassword"></label>
							<input
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								required
								onChange={this.changeHandler}
							></input>

							<button
								className="form-button"
								type="submit"
								onClick={this.handleSubmit}
							>
								Sign Up
							</button>
							<div> {this.state.errorMessage} </div>
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

const mapDispatch = (dispatch) => {
	return {
		auth: (email, password, method) => dispatch(auth(email, password, method)),
	};
};

export default connect(null, mapDispatch)(Signup);
