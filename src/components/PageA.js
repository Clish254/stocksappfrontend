import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import accountService from "../services/accountService";
import ShortTable from "./ShortTable";
import "../assets/PageA.css";

const PageA = () => {
  const [account, setAccount] = useState({
    portfolioValue: "",
    buyingPower: "",
  });

  useEffect(() => {
    accountService.get().then((accountObj) => {
      // make returned numbers comma seperated in thousands
      const pv = new Intl.NumberFormat().format(
        Number(accountObj.portfolio_value)
      );
      const bp = new Intl.NumberFormat().format(
        Number(accountObj.buying_power)
      );
      setAccount({
        portfolioValue: pv,
        buyingPower: bp,
      });
    });
  }, []);

  const history = useHistory();
  const handleClick = () => history.push("/pageb");

  return (
    <div>
      <h3>Page A</h3>
      <div className="pagea-flex">
        <div className="pagea-account">
          <h2>Investing:</h2>
          <p>{`$${account.portfolioValue}.00`}</p>
          <h2>Buying Power:</h2>
          <p>{`$${account.buyingPower}.00`}</p>
          <button onClick={handleClick}>All Stocks</button>
        </div>
        <div className="pagea-table">
          <ShortTable />
        </div>
      </div>
    </div>
  );
};

export default PageA;
