import { useState, useEffect } from "react";
import {
  getLatestOperations,
  getOperationsBalance,
} from "../../services/services";
import OperationsBalance from "./Balance/OperationsBalance";
import OperationsList from "../Operations/List/OperationList";
import Title from "../Title/Title";

const Home = () => {
  const [balance, setBalance] = useState();
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
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <OperationsBalance balance={balance} />
      <Title>Last {operationsQuantity} operations</Title>
      <OperationsList operations={operations} />
    </>
  );
};

export default Home;
