import React, { Component } from "react";
import {
  ReactiveBase,
  DateRange,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import "./App.css";
import Navbar from "./components/NavbarComponent";
import Multilist from "./components/MultilistCOmponent";
import Singlerange from "./components/SinglerangeComponent";
import Rangeslider from "./components/RangesliderComponent";
import Multidatalist from "./components/MultidatalistComponent";
import Reactivelist from "./components/ReactivelistComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters"
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies"
    });
  }
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="MovieAppFinal"
          credentials="RxIAbH9Jc:6d3a5016-5e9d-448f-bd2b-63c80b401484"
          theme={{
            typography: {
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
              fontSize: "16px"
            },
            colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#2196F3",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
            }
          }}
        >
          <Navbar />
          <div className="sub-container">
            <div
              className={
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-pied-piper-alt" /> Genres{" "}
                </b>
              </div>
              <Multilist />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-dollar" /> Revenue{" "}
                </b>
              </div>

              <Singlerange />
              <hr className="blue" />

              <div className="filter-heading center">
                <b>
                  <i className="fa fa-star" /> Ratings
                </b>
              </div>
              <Rangeslider />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-language" /> Languages{" "}
                </b>
              </div>
              <Multidatalist />
              <hr className="blue" />

              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-calendar" /> Release Date{" "}
                </b>
              </div>
              <DateRange
                componentId="date-filter"
                dataField="release_date"
                className="datePicker"
              />
            </div>
            <div
              className={
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters
                showClearAll={true}
                clearAllLabel="Clear filters"
              />
              <Reactivelist />
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
