const { Router } = require("express");
const SessionRouter = require("./session");

const router = Router();

router.use("/session", SessionRouter);

module.exports = router;
