import "./OperationBalance.css";
import Table from "react-bootstrap/Table";

const OperationsBalance = ({ balance, expenses, incomes, operations }) => {
  const currentMoney = balance < 0 ? "negativeAmount" : "";
  return (
    <Table className="text-center containerTable">
      <thead>
        <tr>
          <th>Money incomes</th>
          <th>Money expenses</th>
        </tr>
      </thead>
      <tbody>
        {operations.length === 0 ? (
          <tr>
            <td>$0{incomes}</td>
            <td>$0{expenses}</td>
          </tr>
        ) : (
          <tr>
            <td>${incomes}</td>
            <td>${expenses}</td>
          </tr>
        )}
        <tr>
          <th colSpan={2}>Total balance</th>
        </tr>
        <tr>
          <td id={currentMoney} colSpan={2}>
            ${balance}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OperationsBalance;
