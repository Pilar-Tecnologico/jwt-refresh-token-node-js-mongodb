const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiCatResponse.controller");

router.get("/response", async (req, res) => {
  apiController.getResponse(req, res);
});

module.exports = router;
