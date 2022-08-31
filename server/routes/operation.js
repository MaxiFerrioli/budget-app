const express = require('express');

const operationController = require('../controllers/operation');

const router = express.Router();

router.get('/', operationController.getAllOperations);
router.get('/balance', operationController.getOperationsBalance);
router.get('/:operationId', operationController.getOperation);
router.get('/limit/:quantity', operationController.getOperations);
router.post('/', operationController.addOperation);
router.patch('/:operationId', operationController.updateOperation);
router.delete('/:operationId', operationController.deleteOperation);

module.exports = router;