import Item from "../../Item/Item";

const types = [
  { code: 1, name: "income" },
  { code: 2, name: "expense" },
];

const OperationsList = ({ operations }) => {
  const getTypeName = (operationType) => {
    const type = types.find((type) => type.code === operationType);
    return type.name;
  };

  return (
    <>
      {operations.map((operation) => (
        <Item>
          <div>
            <div>
              <div>{operation.concept}</div>
              <div>${operation.amount}</div>
            </div>
            <div>
              <div>{getTypeName(operation.type)}</div>
            </div>
          </div>
        </Item>
      ))}
    </>
  );
};

export default OperationsList;
