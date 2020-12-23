import axios from "axios";
const url = "/api/marketCap";

const get = async (symbol) => {
  const request = axios({
    method: "get",
    url: `${url}/${symbol}`,
  });
  return request.then((response) => response.data.data);
};

const marketCapService = {
  get,
};

export default marketCapService;
