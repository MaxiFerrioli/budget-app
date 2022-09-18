import { useState, useEffect } from "react";
import moment from "moment";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./OperationForm.css";

const OperationForm = ({ onSaveOperation, operation = null }) => {
  const [enteredConcept, setEnteredConcept] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredType, setEnteredType] = useState(0);
  const [isFormReady, setIsFormReady] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (operation && operation.id) {
      setEnteredConcept(operation.concept);
      setEnteredAmount(operation.amount);
      setEnteredDate(operation.date);
      setEnteredType(operation.type_id);
      setIsFormReady(true);
      setIsEditing(true);
    }
  }, [operation]);

  useEffect(() => {
    if (enteredConcept && enteredAmount && enteredDate && enteredType) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  }, [enteredConcept, enteredAmount, enteredDate, enteredType]);

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const conceptHandler = (event) => {
    setEnteredConcept(event.target.value);
  };

  const typeHandler = (event) => {
    setEnteredType(+event.target.value);
  };

  const dateHandler = (event) => {
    const date = moment(event.target.value).format("YYYY-MM-DD");
    setEnteredDate(date);
  };

  const clearHandler = () => {
    setEnteredConcept("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredType(0);
    setIsFormReady(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const savedOperation = {
      concept: enteredConcept,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      type_id: enteredType,
    };
    if (isEditing) {
      savedOperation.id = operation.id;
    } else {
      clearHandler();
    }
    onSaveOperation(savedOperation);
  };

  return (
    <div>
      <h2 className="titleOperations">Add operations</h2>
      <Form onSubmit={submitHandler} className="containerForm">
        <div className="Form">
          <div>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Concept</Form.Label>
              <Form.Control
                type="text"
                value={enteredConcept}
                onChange={conceptHandler}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={enteredAmount}
                onChange={amountHandler}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={enteredDate}
                onChange={dateHandler}
                min="2020-01-01"
                max="2023-01-01"
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={enteredType}
                onChange={typeHandler}
                disabled={isEditing}
              >
                <option value="0">Select an option</option>
                <option value="1">Income</option>
                <option value="2">Expense</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <div className="formButton">
          {!isEditing && (
            <Button variant="primary" type="button" onClick={clearHandler}>
              Clear
            </Button>
          )}
          <Button variant="primary" type="submit" disabled={!isFormReady}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default OperationForm;
