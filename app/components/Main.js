import React, { Component } from "react";
import { connect } from "react-redux";
import { me } from "../redux/user";
import { Redirect } from "react-router-dom";
import Ball from "./Ball";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			loadingMessage: "Loading Video...", //figure this out later
		};
	}

	componentDidMount() {
		try {
			this.props.me();
		} catch (error) {
			console.log(error);
		}
		//LOAD MODEL:
		//if a model associated with this user exists in the db, load it
		//else, make new model and link it to the user id
		//don't forget to save the model at regular intervals

		const classifier = knnClassifier.create();
		const webcamElement = document.getElementById("webcam");

		let net;

		async function app() {
			console.log("Loading mobilenet..");
			// Load the model.
			net = await mobilenet.load();
			console.log("Successfully loaded model");

			// Create an object from Tensorflow.js data API which could capture image
			// from the web camera as Tensor.
			const webcam = await tf.data.webcam(webcamElement);

			// Reads an image from the webcam and associates it with a specific class
			// index.
			const addExample = async (classId) => {
				// Capture an image from the web camera.
				const img = await webcam.capture();

				// Get the intermediate activation of MobileNet 'conv_preds' and pass that to the KNN classifier.
				const activation = net.infer(img, true);

				// Pass the intermediate activation to the classifier.
				classifier.addExample(activation, classId);

				// Dispose the tensor to release the memory.
				img.dispose();
			};

			//grab 10 shots of each class
			const tenCaptures = (classId) => {
				document.getElementById("instructions").innerText =
					"Rotate your face clockwise";
				let counter = 0;
				let interval = setInterval(() => {
					addExample(classId);
					counter++;
					document.getElementById("counter").innerText = counter;
					if (counter === 10) {
						clearInterval(interval);
						document.getElementById("counter").innerText = "";
						document.getElementById("instructions").innerText = "";
					}
				}, 1000);
			};

			// When clicking a button, add an example for that class.
			document
				.getElementById("class-a")
				.addEventListener("click", () => tenCaptures(0));
			document
				.getElementById("class-b")
				.addEventListener("click", () => tenCaptures(1));
			document
				.getElementById("class-c")
				.addEventListener("click", () => tenCaptures(2));

			while (true) {
				if (classifier.getNumClasses() > 0) {
					const img = await webcam.capture();

					// Get the activation from mobilenet from the webcam.
					const activation = net.infer(img, "conv_preds");
					// Get the most likely class and confidence from the classifier module.
					const result = await classifier.predictClass(activation);

					const classes = ["Neutral", "Happy", "Sad"];
					document.getElementById("console").innerText = `
        ${classes[result.label]}\n
      `;
					//probability: ${result.confidences[result.label]} <--to display probability
					// Dispose the tensor to release the memory.
					img.dispose();
				}
				// Give some breathing room by waiting for the next animation frame to
				// fire.
				await tf.nextFrame();
			}
		}
		app();
	}

	render() {
		return this.props.user ? (
			<div className="main">
				<div className="video-container">
					{this.state.loadingMessage}
					<video
						autoPlay
						playsInline
						muted
						id="webcam"
						width="400"
						height="400"
					></video>
					<div id="console">Mood</div>
				</div>
				<div id="instructions"></div>
				<div id="counter"></div>
				<div className="button-contaier">
					<button id="class-a">Neutral</button>
					<button id="class-b">Happy</button>
					<button id="class-c">Sad</button>
				</div>
			</div>
		) : (
			<Redirect to="/" />
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
		me: () => dispatch(me()),
	};
};

export default connect(mapState, mapDispatch)(Main);
