import * as React from "react";
// import "./styles.css";
import { Table } from "./List/Table";

/**
 * Get a list of Star Wars people using:
 * https://swapi.dev/api/people/
 *
 * Pass this data to the <List /> component and render
 * typical attributes like name, age, etc.
 **/

export default function App() {
    const [people, setPeople] = React.useState([]);
    const [showTable, setShowTable] = React.useState(false);
  
    const handleClick = (event: any) => {
      setShowTable(true)
      fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((data) => setPeople(data.results));
    };
  
    return (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={handleClick}>
            {showTable ? `Click Me to Hide the List` : `Click Me to Show the List`}
          </button>
          {showTable ? <Table characters={people} /> : null}
        </div>
      );
  }