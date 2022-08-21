import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOperation, editOperation } from "../../services/services";
import OperationForm from "../Operations/Form/OperationForm";

const OperationEdit = () => {
  const [operation, setOperation] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOperation(id)
      .then(({ data }) => {
        setOperation(data.operation);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const saveOperation = (editedOperation) => {
    editOperation(editedOperation)
      .then(({ data }) => {
        setOperation(data.operation);
      })
      .catch((error) => console.log(error));
  };

  return (
    <OperationForm
      operation={operation}
      onSaveOperation={saveOperation}
      title="Edit Operation"
    />
  );
};

export default OperationEdit;
