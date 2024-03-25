import Papa from "papaparse";
import { useState } from "preact/compat";
import './style.css';

export function Spending() {
	const [parsedData, setParsedData] = useState([]);

  const [tableRows, setTableRows] = useState([]);

  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };
    return (
      <div className="spending">
        <h1>Spending</h1>
        <input
          type="file"
          name="file"
          onChange={changeHandler}
          accept=".csv"
        />
        <table>
          <thead>
            <tr>{tableRows.map((row, i) => <th key={i}>{row}</th>)}</tr>
          </thead>
          <tbody>
            {values.map((value, index) => (
              <tr key={index}>{value.map((val, i) => <td key={i}>{val}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}