import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOperation } from "../../services/services";
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

  return (
    <OperationForm
      operation={operation}
      onSaveOperation={() => {}}
      title="Edit Operation"
    />
  );
};

export default OperationEdit;
