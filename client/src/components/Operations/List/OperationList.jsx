import Item from "../../Item/Item";
import moment from "moment";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const types = [
  { id: 1, name: "income" },
  { id: 2, name: "expense" },
];

const OperationsList = ({ operations, onDeleteOperation }) => {
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
            <div>
              <div>
                <Link to={`/operation/edit/${operation.id}`}>
                  <FiEdit />
                </Link>
                <BsTrash onClick={() => onDeleteOperation(operation.id)} />
              </div>
            </div>
          </div>
        </Item>
      ))}
    </>
  );
};

export default OperationsList;
