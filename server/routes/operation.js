const express = require("express");
const operationController = require("../controllers/operation");
const router = express.Router();

router.get("/list", operationController.getAllOperation);
router.get("/", operationController.getOperations);
router.get("/", operationController.getOperation);
router.post("/", operationController.addOperation);
router.patch("/", operationController.updateOperation);
router.delete("/", operationController.deleteOperation);

module.exports = router;
