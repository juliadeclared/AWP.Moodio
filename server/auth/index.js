const router = require("express").Router();
const User = require("../db/user");

module.exports = router;

router.put("/log-in", async (req, res, next) => {
	try {
		const user = await User.findOne({ where: { email: req.body.email } });
		if (!user) {
			res.status(401).send("Worng username and/or password");
		} else if (!user.correctPassword(req.body.password)) {
			res.status(401).send("Worng username and/or password");
		} else {
			//attach user id to session
			req.session.userId = user.id;
			req.login(user, (err) => (err ? next(err) : res.json(user)));
			//is req.login a passport keyword? Find out
		}
	} catch (error) {
		next(error);
	}
});

router.put("/sign-up", async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		req.login(user, (err) => (err ? next(err) : res.json(user)));
	} catch (error) {
		if (error.name === "SequelizeUniqueConstraintError") {
			res.status(401).send("User already exists");
		} else {
			next(error);
		}
	}
});

router.post("/log-out", (req, res) => {
	req.logout();
	req.session.destroy();
	res.redirect("/");
});

router.get("/me", (req, res) => {
	res.json(req.user);
});

router.use("/google", require("./google"));
