import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, me } from "../redux/user";

class Navbar extends Component {
	async componentDidMount() {
		try {
			await this.props.me();
		} catch (error) {
			console.log(error);
		}
      console.log(this.props.user);
      //is undefined
	}

	render() {
		let isLoggedin = this.props.user.id

		return (
			<div>
				{isLoggedin && isLoggedin ? (
					<nav>
						<li>
							<Link to="/main">Dashboard</Link>
						</li>
						<li>
							<a href="#" onClick={this.props.logout}>
								{" "}
								Sign Out
							</a>
						</li>
					</nav>
				) : (
					<nav>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/log-in">Log In</Link>
						</li>
						<li>
							<Link to="/sign-up">Sign Up</Link>
						</li>
					</nav>
				)}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatch = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
		me: () => dispatch(me()),
	};
};

export default connect(mapState, mapDispatch)(Navbar);
