import React, {useEffect, useState} from "react";
import axios from "axios";
import DataGrid from "./DataGrid";
import { Link } from 'react-router-dom';

function History() {
  //Declare a new state variable, which we'll call "coverts"
  const [converts, setConverts] = useState([]);

  ////UseEffect Hook allows to  fetching data
  //Uses the GET method of the Axios client and connects to the server application that is responsible for managing the database.
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/convert")
      .then(({ data }) => setConverts(data))
      .catch((err) => console.error(err.response));
  }, [converts]);

  //Return the appearance of the table from the DataGrid component and the ability to switch back to the converter
  return(
    <div>
      <Link to="/">Go to converter</Link>
      <DataGrid/>
    </div>
  );
}
//A module is a self contained unit that can expose assets to other modules using export
export default History
