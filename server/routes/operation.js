const express = require("express");
const operationController = require("../controllers/operation");
const router = express.Router();

router.get("/list", operationController.getOperations);

module.exports = router;
