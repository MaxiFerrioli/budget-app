const Operation = require("../models/operation");

exports.getAllOperations = async (req, res, next) => {
  Operation.findAll({ order: [["date", "DESC"]] })
    .then((operations) => {
      res.status(200).json({
        operations,
        message: "get all operations",
      });
    })
    .catch((err) => next(err));
};

exports.getOperations = (req, res, next) => {
  Operation.findAll({})
    .then(() => {
      res.status(200).json({
        messege: "get operations",
      });
    })
    .catch((err) => next(err));
};

exports.getOperation = (req, res, next) => {
  const { operationId } = req.params;
  Operation.findByPk(operationId)
    .then((operation) => {
      if (!operation) {
        const error = new Error("NOT FOUND");
        error.statusCode = 404;
        next(error);
      }
    })
    .catch((err) => next(err));
};

exports.deleteOperation = (req, res, next) => {
  const { operationId } = req.params;
  Operation.findByPk(operationId).then((operation) => {
    operation.destroy();
    res.status(200).json({
      operation,
      message: "operation deleted",
    });
  });
};

exports.addOperation = (req, res, next) => {
  res.send("Add");
};

exports.updateOperation = (req, res, next) => {
  res.send("Update");
};
