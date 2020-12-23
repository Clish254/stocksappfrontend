import React, { useState, useEffect } from "react";
import lastQuoteService from "../services/lastQuoteService";
import marketCapService from "../services/marketCapService";
import "../assets/LongTableBody.css";

const LongTableBody = ({ stock }) => {
  const [worth, setWorth] = useState("");
  const [marketCap, setMarketCap] = useState("");

  useEffect(() => {
    lastQuoteService
      .get(stock.symbol)
      .then((lastQuoteObj) => {
        setWorth(lastQuoteObj.askprice);
      })
      .catch(() => setWorth("error"));
  }, [stock.symbol]);

  useEffect(() => {
    marketCapService
      .get(stock.symbol)
      .then((response) => {
        const marketCapResponse = response.quoteResponse.result[0].marketCap;
        if (marketCapResponse) {
          const flooredMktCap = Math.floor(marketCapResponse);
          const marketCapLength = `${flooredMktCap}`.length;
          let mktCap;
          let roundedCap;
          if (marketCapLength > 9 && marketCapLength <= 12) {
            mktCap = marketCapResponse / 1000000000;
            roundedCap = Math.round((mktCap + Number.EPSILON) * 100) / 100;
            setMarketCap(`${roundedCap}B`);
          } else if (marketCapLength > 12) {
            mktCap = marketCapResponse / 1000000000000;
            roundedCap = Math.round((mktCap + Number.EPSILON) * 100) / 100;
            setMarketCap(`${roundedCap}T`);
          } else {
            mktCap = marketCapResponse / 1000000;
            roundedCap = Math.round((mktCap + Number.EPSILON) * 100) / 100;
            setMarketCap(`${roundedCap}M`);
          }
        } else {
          setMarketCap("error");
        }
      })
      .catch((error) => {
        setMarketCap("error");
      });
  }, [stock.symbol]);

  return (
    <tr className="long-table-row">
      <td className="long-td">{stock.name}</td>
      <td className="long-td">{stock.symbol}</td>
      <td className="long-td">
        {worth !== "error" ? `$${worth}` : "Not found"}
      </td>
      <td className="long-td">
        {marketCap !== "error" ? marketCap : "Not found"}
      </td>
    </tr>
  );
};

export default LongTableBody;
