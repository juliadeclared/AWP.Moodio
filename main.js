"use strict";

const { db } = require("./server/db");
const app = require("./server");
const PORT = 8080;
// const socketio = require("socket.io");

db.sync({ force: true}) // if you update your db schemas, make sure you drop the tables first and then recreate them
	.then(() => {
		console.log("db synced");
		const server = app.listen(PORT, () =>
			console.log(`listening on port ${PORT}`)
		);
		// set up our socket control center
		// const io = socketio(server);
		// require("./server/socket")(io);
	});
