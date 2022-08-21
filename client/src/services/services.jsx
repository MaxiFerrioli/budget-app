import axios from "axios";

export const getAllOperations = () => {
  try {
    return axios.get(`http://localhost:4000/operation/`);
  } catch (error) {
    console.log(error);
  }
};

export const getOperation = (id) => {
  try {
    return axios.get(`http://localhost:4000/operation/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const getLatestOperations = (quantity) => {
  try {
    return axios.get(`http://localhost:4000/operation/limit/${quantity}`);
  } catch (error) {
    console.log(error);
  }
};

export const getOperationsBalance = () => {
  try {
    return axios.get(`http://localhost:4000/operation/balance`);
  } catch (error) {
    console.log(error);
  }
};

export const addNewOperation = (operation) => {
  try {
    return axios.post(`http://localhost:4000/operation/`, { ...operation });
  } catch (error) {
    console.log(error);
  }
};

export const editOperation = ({ id, ...operation }) => {
  try {
    return axios.patch(`http://localhost:4000/operation/${id}`, {
      ...operation,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOperation = (id) => {
  try {
    return axios.delete(`http://localhost:4000/operation/${id}`);
  } catch (error) {
    console.log(error);
  }
};
