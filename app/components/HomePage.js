import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "avataaars";

class HomePage extends Component {
	render() {
		return (
			<div className="main">
				<h1>Welcome to Moodio!</h1>
				<div id="avatars">
					<Avatar
						avatarStyle="Circle"
						topType="LongHairStraightStrand"
						accessoriesType="Blank"
						hairColor="Brown"
						facialHairType="Blank"
						clotheType="Overall"
						clotheColor="Blue02"
						eyeType="Wink"
						eyebrowType="UnibrowNatural"
						mouthType="Eating"
						skinColor="Tanned"
					/>
					<Avatar
						avatarStyle="Circle"
						topType="WinterHat1"
						accessoriesType="Wayfarers"
						hatColor="Red"
						hairColor="Black"
						facialHairType="BeardMagestic"
						facialHairColor="BrownDark"
						clotheType="CollarSweater"
						clotheColor="Gray01"
						eyeType="Happy"
						eyebrowType="RaisedExcited"
						mouthType="Smile"
						skinColor="Light"
					/>
					<Avatar
						avatarStyle="Circle"
						topType="LongHairNotTooLong"
						accessoriesType="Kurt"
						hairColor="PastelPink"
						facialHairType="BeardMagestic"
						facialHairColor="Brown"
						clotheType="GraphicShirt"
						clotheColor="Pink"
						graphicType="Skull"
						eyeType="WinkWacky"
						eyebrowType="UpDown"
						mouthType="Vomit"
						skinColor="Yellow"
					/>
				</div>
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

export default HomePage;
