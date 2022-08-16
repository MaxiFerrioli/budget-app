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
  Operation.findAll({
    limit: parseInt(req.params.quantity),
    order: [["date", "DESC"]],
  })
    .then((operations) => {
      res.status(200).json({
        operations,
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
      res.status(200).json({
        operation,
        message: "Fetched operation successfuly",
      });
    })
    .catch((err) => next(err));
};

exports.deleteOperation = (req, res, next) => {
  const { operationId } = req.params;
  Operation.findByPk(operationId)
    .then((operation) => {
      operation.destroy();
      res.status(200).json({
        operation,
        message: "operation deleted",
      });
    })
    .catch((err) => next(err));
};

exports.addOperation = async (req, res, next) => {
  const { concept, amount, date, type_id } = req.body;
  Operation.create({
    concept,
    amount,
    date,
    type_id,
  })
    .then((operation) => {
      res.status(201).json({
        operation,
        message: "add operation",
      });
    })
    .catch((err) => next(err));
};

exports.updateOperation = (req, res, next) => {
  const { operationId } = req.params;
  const { concept, amount, date } = req.body;

  Operation.findByPk(operationId)
    .then((operation) => {
      if (!operation) {
        const error = new Error("the operation was not found");
        error.statusCode = 404;
        next(error);
      }
      operation.concept = concept;
      operation.amount = amount;
      operation.date = date;
      operation
        .save()
        .then(() => {
          res.status(200).json({
            message: "Operation updated successfuly",
            operation,
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};
