import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../redux/user";
import OAuthForm from "./OAuthForm";
import Avatar from "avataaars";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			//is this safe?
			method: "log-in",
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
		const method = this.state.method;
		try {
			await this.props.auth(email, password, method);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const error = this.props.error;
		const avatar = {
			width: "200px",
         height: "200px",
         alignSelf: "center"
      };
      
		return (
			<div className="main">
				<div className="login-container">
					<Avatar
						style={avatar}
						avatarStyle="Circle"
						topType="LongHairCurly"
						accessoriesType="Blank"
						hairColor="PastelPink"
						facialHairType="Blank"
						clotheType="ShirtCrewNeck"
						clotheColor="Gray01"
						eyeType="Wink"
						eyebrowType="Default"
						mouthType="Smile"
						skinColor="Light"
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
						<button
							className="form-button"
							type="submit"
							onClick={this.handleSubmit}
						>
							Log In
						</button>
						<div> {this.state.errorMessage} </div>
					</form>
					<OAuthForm authMethod="Log In" />
					<div className="login-footer">
						<Link to="/sign-up">Create an Account</Link>
					</div>
				</div>
			</div>
		);
	}
}

// const mapState = state => {
//    return {

//    }
// }

const mapDispatch = (dispatch) => {
	return {
		auth: (email, password, method) => dispatch(auth(email, password, method)),
	};
};

export default connect(null, mapDispatch)(Login);
