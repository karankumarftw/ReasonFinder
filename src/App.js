import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [info, setInfo] = useState("");

  const fetchData = (excuse) => {
    axios
      .get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
      .then((res) => {
        setInfo(res.data[0]);
      });
  };

  return (
    <div className="App" style={{ backgroundColor: "lightcyan" }}>
      <h2 style={{ backgroundColor: "lightblue" }}>
        Want to find a reason? to which one do you want?
      </h2>
      <div style={{ flex: 10 }}>
        <button
          className="button"
          onClick={() => {
            fetchData("family");
          }}
        >
          Family
        </button>
        <button
          className="button"
          onClick={() => {
            fetchData("college");
          }}
        >
          College
        </button>
        <button
          className="button"
          onClick={() => {
            fetchData("office");
          }}
        >
          Office
        </button>
      </div>
      <div className="App-header">
        <p>{info.category}</p>
        <p>{info.excuse}</p>
      </div>
    </div>
  );
}

export default App;
