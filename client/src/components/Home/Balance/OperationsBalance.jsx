const OperationsBalance = ({ balance, expenses, incomes }) => {
  return (
    <>
      <span>Money incomes</span>
      <div>${incomes}</div>
      <span>Money expenses</span>
      <div>${expenses}</div>
      <span>Total balance</span>
      <div>${balance}</div>
    </>
  );
};

export default OperationsBalance;
