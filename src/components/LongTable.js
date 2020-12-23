import React from "react";
import LongTableBody from "./LongTableBody";
import "../assets/LongTable.css";

const LongTable = () => {
  const longStockList = [
    { name: "AT&T", symbol: "T" },
    { name: "APPLE", symbol: "AAPL" },
    { name: "ZYNGA", symbol: "ZNGA" },
    { name: "FACEBOOK", symbol: "FB" },
    { name: "UBER", symbol: "UBER" },
    { name: "NIKOLA", symbol: "NKLA" },
    { name: "TESLA", symbol: "TSLA" },
    { name: "PALANTIR TECH", symbol: "PLTR" },
    { name: "AML MEDIA", symbol: "AML" },
    { name: "NETFLIX", symbol: "NFLX" },
    { name: "INOVIO", symbol: "INO" },
    { name: "SPIRIT AIRLINES", symbol: "SAVE" },
    { name: "EXXON MOBIL", symbol: "XOM" },
    { name: "NOKIA", symbol: "NOK" },
  ];

  return (
    <table className="long-table">
      <thead className="long-th">
        <tr className="long-tablehead-rw">
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody className="long-tb">
        {longStockList.map((stock) => {
          return <LongTableBody key={stock.name} stock={stock} />;
        })}
      </tbody>
    </table>
  );
};

export default LongTable;
