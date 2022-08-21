import { useState } from "react";
import OperationForm from "../Operations/Form/OperationForm";
import Title from "../Title/Title";
import OperationsList from "./List/OperationList";

const Operations = () => {
  const [operations, setOperations] = useState([]);

  const addOperationHandler = (operation) => {
    setOperations((prevOperations) => [operation, ...prevOperations]);
  };

  return (
    <div>
      <OperationForm onSaveOperation={addOperationHandler} />
      <Title />
      <OperationsList operations={operations} />
    </div>
  );
};
export default Operations;
