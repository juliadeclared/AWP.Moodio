import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../redux/user";
import OAuthForm from "./OAuthForm";
import Avatar from "avataaars";

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			imgUrl: "",
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
		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const email = this.state.email;
		const password = this.state.password;
		const confirmPassword = this.state.confirmPassword;
		const method = this.state.method;
		const imgUrl = this.state.imgUrl;

		if (password === confirmPassword) {
			try {
				await this.props.auth(
					email,
					password,
					method,
					firstName,
					lastName,
					imgUrl
				);
			} catch (error) {
				this.setState({ errorMessage: error.response.data });
			}
		} else {
			this.setState({ errorMessage: "Passwords must match" });
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
						{this.state.imgUrl ? (
							<img className="login-img" src={this.state.imgUrl} />
						) : (
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
						)}
						<form>
							<label htmlFor="firstName"></label>
							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								required
								onChange={this.changeHandler}
							></input>

							<label htmlFor="lastName"></label>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								required
								onChange={this.changeHandler}
							></input>

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

							<label htmlFor="imgUrl"></label>
							<input
								type="url"
								placeholder="Your Beautiful Face (URL)"
								name="imgUrl"
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
						<OAuthForm authMethod="Sign Up" />
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
		auth: (email, password, method, firstName, lastName, imgUrl) =>
			dispatch(auth(email, password, method, firstName, lastName, imgUrl)),
	};
};

export default connect(null, mapDispatch)(Signup);
