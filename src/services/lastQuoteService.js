import axios from "axios";
const url = "/api/last_quote/stocks";

const get = async (symbol) => {
  const request = axios({
    method: "get",
    url: `${url}/${symbol}`,
  });
  return request.then((response) => response.data.data.last);
};

const lastQuoteService = {
  get,
};

export default lastQuoteService;
