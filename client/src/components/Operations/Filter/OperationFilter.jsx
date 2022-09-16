import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import "./OperationFilters.css";

const OperationsFilters = ({
  onShowExpenses,
  onShowIncomes,
  onClearFilter,
}) => {
  return (
    <div className="containerFilters">
      <h2 className="title">ALL OPERATIONS</h2>
      <ToggleButtonGroup
        type="checkbox"
        variant="outline-primary"
        className="filters"
      >
        <ToggleButton onClick={onShowIncomes}>Incomes</ToggleButton>
        <ToggleButton onClick={onShowExpenses}>Expenses</ToggleButton>
        <ToggleButton onClick={onClearFilter}>All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default OperationsFilters;
