import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {/* <a href="#">
          Redirect To Github
        </a> */}
      </div>
    </React.Fragment>
  );
}

export default App;
