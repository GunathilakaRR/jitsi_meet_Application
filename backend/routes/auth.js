const express = require("express");
const router = express.Router();
const token = require("../jwt");

router.get("/",  (req, res) => {

    res.status(200).send(token);

})

module.exports = router;