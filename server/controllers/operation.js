const Operation = require("../models/operation");

exports.getOperation = (req, res, next) => {
  Operation.findAll({}).then(() => {
    res.status(200).json({ operations, messege: "get operation" });
  });
  res.send("get operation");
};

exports.getOperation = (req, res, next) => {
  Operation.findAll({}).then(() => {
    res.status(200).json({ operations, messege: "get operation" });
  });
  res.send("get operation");
};

exports.addOperation = (req, res, next) => {
  res.send("Add");
};

exports.updateOperation = (req, res, next) => {
  res.send("Update");
};

exports.deleteOperation = (req, res, next) => {
  res.send("Delete");
};
