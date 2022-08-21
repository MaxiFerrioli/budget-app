import { useState, useEffect } from "react";
import Item from "../../Item/Item";
import moment from "moment";

const OperationForm = ({ onSaveOperation, operation = null, title }) => {
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
      type: enteredType,
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
      <Item title="ADD OPERATION">
        <form onSubmit={submitHandler}>
          <label>Concept</label>
          <input type="text" value={enteredConcept} onChange={conceptHandler} />
          <label>Amount</label>
          <input type="text" value={enteredAmount} onChange={amountHandler} />
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateHandler}
            min="2020-01-01"
            max="2023-01-01"
          />
          <label>Type</label>
          <select
            value={enteredType}
            onChange={typeHandler}
            disabled={isEditing}
          />
          <select
            value={enteredType}
            onChange={typeHandler}
            disabled={isEditing}
          >
            <option value="0">Select an option</option>
            <option value="1">Income</option>
            <option value="2">Expense</option>
          </select>
          <div>
            {!isEditing && (
              <button type="button" onClick={clearHandler}>
                Clear
              </button>
            )}
            <button type="submit" disabled={!isFormReady}>
              Save
            </button>
          </div>
        </form>
      </Item>
    </div>
  );
};

export default OperationForm;
