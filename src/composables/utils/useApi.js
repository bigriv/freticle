import axios from "axios";

const useApi = ({ apiDefine, succeed, failed }) => {
  const endpoint = `${process.env.VUE_APP_API_BASE_URL}${apiDefine.path}`;
  const execute = () => {
    switch (apiDefine.method) {
      case "GET":
        getExecute();
        break;
      case "POST":
        postExecute();
        break;
      case "PUT":
        putExecute();
        break;
      case "DELETE":
        deleteExecute();
        break;
    }
  };
  const getExecute = () => {
    axios
      .get(endpoint, { params: apiDefine.params })
      .then((object) => succeed(object.data))
      .catch((object) => failed(object.data));
  };
  const postExecute = () => {
    axios
      .post(endpoint, apiDefine.params)
      .then((object) => succeed(object.data))
      .catch((object) => failed(object.data));
  };
  const putExecute = () => {
    axios
      .put(endpoint, apiDefine.params)
      .then((object) => succeed(object.data))
      .catch((object) => failed(object.data));
  };
  const deleteExecute = () => {
    axios
      .delete(endpoint, { data: apiDefine.params })
      .then((object) => succeed(object.data))
      .catch((object) => failed(object.data));
  };
  return {
    execute,
  };
};

export default useApi;
