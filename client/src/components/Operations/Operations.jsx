import { useState, useEffect } from "react";
import OperationForm from "../Operations/Form/OperationForm";
import Title from "../Title/Title";
import OperationsFilters from "./Filter/OperationFilter";
import OperationsList from "./List/OperationList";

const Operations = () => {
  const [selectedType, setSelectedType] = useState();
  const [operations, setOperations] = useState([]);
  const [filteredOperations, setFilteredOperations] = useState([]);

  useEffect(() => {
    let filtered;
    if (selectedType) {
      filtered = operations.filter(
        (operation) => operation.type === selectedType
      );
    } else {
      filtered = [...operations];
    }
    setFilteredOperations(filtered);
  }, [operations, selectedType]);

  const addOperationHandler = (operation) => {
    setOperations((prevOperations) => [operation, ...prevOperations]);
  };
  const showExpenses = () => {
    setSelectedType(2);
  };

  const showIncomes = () => {
    setSelectedType(1);
  };

  const clearFilter = () => {
    setSelectedType(null);
  };

  return (
    <div>
      <OperationForm onSaveOperation={addOperationHandler} />
      <Title />
      <OperationsFilters
        onShowExpenses={showExpenses}
        onShowIncomes={showIncomes}
        onClearFilter={clearFilter}
      />
      <OperationsList operations={filteredOperations} />
    </div>
  );
};
export default Operations;
