const router = require("express").Router();
const User = require("../db/user");
module.exports = router;

router.get("/", async (req, res, next) => {
	try {
		const users = await User.findAll({ attributes: ["id", "email"] });
		res.json(users);
	} catch (error) {
		next(error);
	}
});
