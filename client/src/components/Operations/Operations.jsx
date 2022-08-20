import { useState } from "react";
import OperationForm from "../Operations/Form/OperationForm";

const Operation = () => {
  const [operations, setOperations] = useState([]);

  const addOperationHandler = (operation) => {
    setOperations((prevOperations) => [operation, ...prevOperations]);
  };

  const operationsRender = (
    <div>
      {operations.map((operation) => (
        <div>
          concept: {operation.concept}, amount: {operation.amount}, date:{" "}
          {operation.date.toString()}, type: {operation.type}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <OperationForm onSaveOperation={addOperationHandler} />
      {operationsRender}
    </div>
  );
};
export default Operation;
