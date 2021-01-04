import React, { Component } from "react";
import {Link} from "react-router-dom"

class HomePage extends Component {
   render() {
      return (
				<div className="main">
					<h1>Welcome to Moodio!</h1>
               <button>
                  <Link to="/log-in">Log In</Link>
               </button>
					<button>
                  <Link to="/sign-up">Sign Up</Link>
               </button>
				</div>
			);
   }
}

export default HomePage