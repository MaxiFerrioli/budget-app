import { useState, useEffect } from "react";
import OperationForm from "../Operations/Form/OperationForm";
import Title from "../Title/Title";
import OperationsFilters from "./Filter/OperationFilter";
import OperationsList from "./List/OperationList";
import {
  getAllOperations,
  addNewOperation,
  deleteOperation,
} from "../../services/services";

const Operations = () => {
  const [selectedType, setSelectedType] = useState();
  const [operations, setOperations] = useState([]);
  const [filteredOperations, setFilteredOperations] = useState([]);

  useEffect(() => {
    getAllOperations()
      .then(({ data }) => {
        setOperations(data.operations);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteHandler = (id) => {
    deleteOperation(id)
      .then(() => {
        setOperations((prevOperations) => {
          const deletedIndex = prevOperations.findIndex(
            (operation) => operation.id === id
          );
          const newOperations = [...prevOperations];
          newOperations.splice(deletedIndex, 1);
          setOperations(newOperations);
        });
      })
      .catch((error) => console.log(error));
  };

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
      .then((data) => {
        setOperations((prevOperations) => [data.operation, ...prevOperations]);
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
      <OperationForm
        onSaveOperation={addOperationHandler}
        title="add operation"
      />
      <Title>ALL OPERATIONS</Title>
      <OperationsFilters
        onShowExpenses={showExpenses}
        onShowIncomes={showIncomes}
        onClearFilter={clearFilter}
      />
      <OperationsList
        operations={filteredOperations}
        onDeleteOperation={deleteHandler}
      />
    </div>
  );
};
export default Operations;
