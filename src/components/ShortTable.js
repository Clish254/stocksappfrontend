import React from "react";
import ShortTableBody from "./ShortTableBody";
import "../assets/ShortTable.css";

const ShortTable = () => {
  const shortStockList = ["AAPL", "MSFT", "TKTK", "TATA", "SHOP"];
  return (
    <table className="short-table">
      <thead>
        <tr className="short-table-title">
          <th colSpan="2">list of 5 stocks</th>
        </tr>
        <tr className="th-two">
          <th>Stock</th>
          <th>Worth</th>
        </tr>
      </thead>
      <tbody className="short-table-body">
        {shortStockList.map((stock) => {
          return <ShortTableBody key={stock} stock={stock} />;
        })}
      </tbody>
      <tfoot>
        <tr className="short-table-footer">
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ShortTable;
