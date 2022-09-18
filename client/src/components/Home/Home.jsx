import { useState, useEffect } from "react";
import {
  getLatestOperations,
  getOperationsBalance,
} from "../../services/services";
import OperationsBalance from "./Balance/OperationsBalance";
import OperationsList from "../Operations/List/OperationList";
import "./Home.css";

const Home = () => {
  const [balance, setBalance] = useState();
  const [expenses, setTotalExpenses] = useState();
  const [incomes, setTotalIncomes] = useState();
  const [operations, setOperations] = useState([]);
  const operationsQuantity = 10;

  useEffect(() => {
    getLatestOperations(operationsQuantity)
      .then(({ data }) => {
        const latestOperations = data.operations.map((operation) => {
          return { ...operation, date: new Date(operation.date) };
        });
        setOperations(latestOperations);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getOperationsBalance()
      .then(({ data }) => {
        setBalance(data.total);
        setTotalExpenses(data.totalExpenses);
        setTotalIncomes(data.totalIncomes);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="titleHome">Balance sheet of money</h1>
      <OperationsBalance
        operations={operations}
        balance={balance}
        expenses={expenses}
        incomes={incomes}
      />
      <h2 className="titleHome">Last {operationsQuantity} operations</h2>
      <OperationsList operations={operations} />
    </>
  );
};

export default Home;
