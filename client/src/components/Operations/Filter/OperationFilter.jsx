const OperationsFilters = ({
  onShowExpenses,
  onShowIncomes,
  onClearFilter,
}) => {
  return (
    <>
      <div>
        <button onClick={onShowIncomes}>Incomes</button>
        <button onClick={onShowExpenses}>Expenses</button>
      </div>
      <button onClick={onClearFilter}>Clear filter</button>
    </>
  );
};

export default OperationsFilters;
