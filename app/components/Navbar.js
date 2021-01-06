import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { logout } from "../redux/user"

class Navbar extends Component {
   render() {
      let isLoggedin = this.props.isLoggedin

      return (
				<div>
						{isLoggedin ? (
							<nav>
								<li>
									<Link to="/main">Dashboard</Link>
								</li>
								<li>
									<a href="#" onClick={this.props.logout()}>
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
      isLoggedin: !!state.user
      //change this to user.id
   }
}

const mapDispatch = (dispatch) => {
   return {
      logout: () => dispatch(logout())
   }
}

export default connect(mapState, mapDispatch)(Navbar)