import React from "react";
import Datasearch from "./DataSearchComponent";
import "./App.css";


class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          <img className="app-logo" src="./logo.jpeg" alt="MovieSearch" />
        </div>

        <div className="search-container">
          <Datasearch />
        </div>
      </div>
    );
  }
}

export default Navbar;
