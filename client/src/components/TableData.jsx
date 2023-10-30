import React from "react";
import "./tableStyle.css";

const DataTable = (props) => (
  <div className="table-container">
  <table className="styled-table">
    <thead className="thead">
      <tr>
        <th></th>
        <th className="table-name th-title">Bateau</th>
        <th className="th-title">Capacité</th>
        <th className="th-title">Réservations</th>
      </tr>
    </thead>
    <tbody>
      {props.data.length > 0 ? (
        props.data.map((bateau) => (
          <tr key={bateau.id} className="table-row">
            <td className={`status ${bateau.max === bateau.reserved ? 'green-row' : 'red-row'}`}></td>
            <td className="table-name">{bateau.name}</td>
            <td>{bateau.max}</td>
            <td className="reserved-td">{bateau.reserved}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No Data....</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
);

export default DataTable;
