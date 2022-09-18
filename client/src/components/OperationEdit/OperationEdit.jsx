import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOperation, editOperation } from "../../services/services";
import OperationForm from "../Operations/Form/OperationForm";
import Swal from "sweetalert2";

const OperationEdit = () => {
  const [operation, setOperation] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOperation(id)
      .then(({ data }) => {
        setOperation(data.operation);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const saveOperation = (editedOperation) => {
    editOperation(editedOperation)
      .then(() => {
        Swal.fire("Saved!", "Your file has been saved.", "success");
        navigate("/operations");
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
