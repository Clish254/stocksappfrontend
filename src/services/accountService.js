import axios from "axios";
const url = "https://paper-api.alpaca.markets/v2/account";

const headers = {
  "APCA-API-KEY-ID": process.env.REACT_APP_ALPACA_KEY_ID,
  "APCA-API-SECRET-KEY": process.env.REACT_APP_ALPACA_SECRET_KEY,
};

const get = async () => {
  const request = axios({
    method: "get",
    url,
    headers,
  });
  return request.then((response) => response.data);
};

const accountService = {
  get,
};

export default accountService;
