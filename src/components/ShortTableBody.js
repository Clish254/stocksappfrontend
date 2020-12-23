import React, { useState, useEffect } from "react";
import lastQuoteService from "../services/lastQuoteService";
import "../assets/ShortTableBody.css";

const ShortTableBody = ({ stock }) => {
  const [worth, setWorth] = useState("");

  useEffect(() => {
    lastQuoteService
      .get(stock)
      .then((lastQuoteObj) => {
        setWorth(lastQuoteObj.askprice);
      })
      .catch(() => setWorth("error"));
  }, [stock]);

  return (
    <tr className="shortTableRow">
      <td>{stock}</td>
      <td>{worth !== "error" ? worth : "Not found"}</td>
    </tr>
  );
};

export default ShortTableBody;
