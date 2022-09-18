import moment from "moment";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./OperationList.css";
import Table from "react-bootstrap/Table";

const types = [
  { id: 1, name: "income" },
  { id: 2, name: "expense" },
];

const OperationsList = ({
  operations,
  onDeleteOperation,
  showActions = false,
}) => {
  const getTypeName = (operationType) => {
    const type = types.find((type) => type.id === operationType);
    return type.name;
  };

  return (
    <>
      {operations.length === 0 ? (
        <div className="emptyOp">
          <h2>You did not register any movement</h2>
        </div>
      ) : (
        <div>
          <Table responsive="xl" bordered striped className="items">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {operations.map((operation) => (
                <tr key={operation.id}>
                  <td>{operation.concept}</td>
                  <td>${operation.amount}</td>
                  <td>{moment(operation.date).format("DD/MM/YYYY")}</td>
                  <td>{getTypeName(operation.type_id)}</td>
                  {showActions && (
                    <td className="deleteEdit">
                      <Link to={`/operation/edit/${operation.id}`}>
                        <FiEdit />
                      </Link>
                      <div className="iconDelete">
                        <BsTrash
                          onClick={() => onDeleteOperation(operation.id)}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default OperationsList;
