import Button from "react-bootstrap/esm/Button";
import "./OperationFilters.css";

const OperationsFilters = ({
  onShowExpenses,
  onShowIncomes,
  onClearFilter,
}) => {
  return (
    <div className="containerFilters">
      <h2 className="title">ALL OPERATIONS</h2>
      <div className="filters">
        <Button onClick={onShowIncomes}>Incomes</Button>
        <Button onClick={onShowExpenses}>Expenses</Button>
        <Button onClick={onClearFilter}>All</Button>
      </div>
    </div>
  );
};

export default OperationsFilters;
