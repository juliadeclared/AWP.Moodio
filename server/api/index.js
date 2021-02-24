const router = require("express").Router();

// routes go here!
// example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.use('/users', require('./users'))

router.use((req, res, next) => {
	const err = new Error("API route not found!");
	err.status = 404;
	next(err);
});

module.exports = router;
