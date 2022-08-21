import { useState } from "react";
import OperationsBalance from "./Balance/OperationsBalance";
import OperationsList from "../Operations/List/OperationList";
import Title from "../Title/Title";

const Home = () => {
  const [balance, setBalance] = useState();
  const [operations, setOperations] = useState([]);

  return (
    <>
      <OperationsBalance balance={balance} />
      <Title>Last 10 operations</Title>
      <OperationsList operations={operations} />
    </>
  );
};

export default Home;
