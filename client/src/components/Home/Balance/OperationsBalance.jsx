import Item from "../../Item/Item";

const OperationsBalance = ({ balance }) => {
  return (
    <Item title="Balance">
      <div>${balance}</div>
    </Item>
  );
};

export default OperationsBalance;
