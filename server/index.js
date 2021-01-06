const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
// const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const db = require("./db");
// const sessionStore = new SequelizeStore({ db });


const app = express();

// passport registration
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
	try {
		const user = await db.models.user.findByPk(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === "test";
app.use(volleyball.custom({ debug }));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// //session middleware with passport
// app.use(
// 	session({
// 		secret: process.env.SESSION_SECRET || "my best friend is Cody",
// 		store: sessionStore,
// 		resave: false,
// 		saveUninitialized: false,
// 	})
// );

app.use(passport.initialize());
app.use(passport.session());

// auth and api routes!
app.use("/api", require("./api"));
app.use("/auth", require("./auth"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
	if (process.env.NODE_ENV !== "test") console.error(err.stack);
	res.status(err.status || 500).send(err.message || "Internal server error");
});



module.exports = app;
