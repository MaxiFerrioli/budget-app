import { useState, useEffect } from "react";
import OperationForm from "../Operations/Form/OperationForm";
import Title from "../Title/Title";
import OperationsFilters from "./Filter/OperationFilter";
import OperationsList from "./List/OperationList";
import { getAllOperations, addNewOperation } from "../../services/services";

const Operations = () => {
  const [selectedType, setSelectedType] = useState();
  const [operations, setOperations] = useState([]);
  const [filteredOperations, setFilteredOperations] = useState([]);

  useEffect(() => {
    getAllOperations()
      .then(({ data }) => {
        const allOperations = data.operations.map((operation) => {
          return { ...operation, date: new Date(operation.date) };
        });
        setOperations(allOperations);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let filtered;
    if (selectedType) {
      filtered = operations.filter(
        (operation) => operation.type_id === selectedType
      );
    } else {
      filtered = [...operations];
    }
    setFilteredOperations(filtered);
  }, [operations, selectedType]);

  const addOperationHandler = (operation) => {
    addNewOperation(operation)
      .then(() => {
        setOperations((prevOperations) => [operation, ...prevOperations]);
      })
      .catch((error) => console.log(error));
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
      <Title>ALL OPERATIONS</Title>
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
