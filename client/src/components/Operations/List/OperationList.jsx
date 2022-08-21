import Item from "../../Item/Item";
import moment from "moment";

const types = [
  { id: 1, name: "income" },
  { id: 2, name: "expense" },
];

const OperationsList = ({ operations }) => {
  const getTypeName = (operationType) => {
    const type = types.find((type) => type.id === operationType);
    return type.name;
  };

  return (
    <>
      {operations.map((operation) => (
        <Item key={operation.id}>
          <div>
            <div>
              <div>{operation.concept}</div>
              <div>${operation.amount}</div>
            </div>
            <div>
              <div>{moment(operation.date).format("DD/MM/YYYY")}</div>
              <div>{getTypeName(operation.type_id)}</div>
            </div>
          </div>
        </Item>
      ))}
    </>
  );
};

export default OperationsList;
