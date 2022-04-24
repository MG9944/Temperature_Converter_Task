import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
//Table to display data entered into the database

//A variable with columns 
const columns = [
  { field: "id", headerName: "ID" },
  { field: "celsius", headerName: "Celsius", width: 300 },
  { field: "fahrenheit", headerName: "Fahrenheit", width: 300 },
  { field: "kelvin", headerName: "Kelvin", width: 300 },
];
////Declare a new state variable, which we'll call "DataGri"
const DataGri = () => {
  const [tableData, setTableData] = useState([]);

  //UseEffect Hook allows to  fetching data
  //Uses the GET method of the Axios client and connects to the server application that is responsible for managing the database.
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/convert")
      .then(({ data }) => setTableData(data))
      .catch((err) => console.error(err.response));
  }, []);

  console.log(tableData);

  //Returning Appearance. Returning data to a table, creating columns and determining how much data can be on a page
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} pageSize={12} />
    </div>
  );
};
//A module is a self contained unit that can expose assets to other modules using export
export default DataGri;
