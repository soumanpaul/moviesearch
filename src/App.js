import React, { Component } from "react";
import {
  ReactiveBase,
  DateRange,
  SelectedFilters,
  ReactiveList
} from "@appbaseio/reactivesearch";
import "./App.css";
import Navbar from "./components/NavbarComponent";
import Multilist from "./components/MultilistCOmponent";
import Singlerange from "./components/SinglerangeComponent";
import Rangeslider from "./components/RangesliderComponent";
import Multidatalist from "./components/MultidatalistComponent";

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
              <ReactiveList
                componentId="results"
                dataField="original_title"
                react={{
                  and: [
                    "mainSearch",
                    "RangeSlider",
                    "language-list",
                    "date-filter",
                    "genres-list",
                    "revenue-list"
                  ]
                }}
                pagination={true}
                className="Result_card"
                paginationAt="bottom"
                pages={5}
                size={12}
                Loader="Loading..."
                noResults="No results were found..."
                sortOptions={[
                  {
                    dataField: "revenue",
                    sortBy: "desc",
                    label: "Sort by Revenue(High to Low) \u00A0"
                  },
                  {
                    dataField: "popularity",
                    sortBy: "desc",
                    label: "Sort by Popularity(High to Low)\u00A0 \u00A0"
                  },
                  {
                    dataField: "vote_average",
                    sortBy: "desc",
                    label: "Sort by Ratings(High to Low) \u00A0"
                  },
                  {
                    dataField: "original_title.raw",
                    sortBy: "asc",
                    label: "Sort by Title(A-Z) \u00A0"
                  }
                ]}
                innerClass={{
                  title: "result-title",
                  listItem: "result-item",
                  list: "list-container",
                  sortOptions: "sort-options",
                  resultStats: "result-stats",
                  resultsInfo: "result-list-info",
                  poweredBy: "powered-by"
                }}
              >
                {({ data }) => (
                  <ReactiveList.ResultCardsWrapper>
                    {data.map(item => (
                      <div
                        style={{ marginRight: "15px" }}
                        className="main-description"
                      >
                        <div className="ih-item square effect6 top_to_bottom">
                          <a
                            target="#"
                            href={"http://www.imdb.com/title/" + item.imdb_id}
                          >
                            <div className="img">
                              <img
                                src={
                                  "https://image.tmdb.org/t/p/w500" +
                                  item.poster_path
                                }
                                alt={item.original_title}
                                className="result-image"
                              />
                            </div>
                            <div className="info colored">
                              <h3 className="overlay-title">
                                {item.original_title}
                              </h3>

                              <div className="overlay-description">
                                {item.tagline}
                              </div>

                              <div className="overlay-info">
                                <div className="rating-time-score-container">
                                  <div className="sub-title Rating-data">
                                    <b>
                                      Imdb
                                      <span className="details">
                                        {" "}
                                        {item.vote_average}/10{" "}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="time-data">
                                    <b>
                                      <span className="time">
                                        <i className="fa fa-clock-o" />{" "}
                                      </span>{" "}
                                      <span className="details">
                                        {item.time_str}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="sub-title Score-data">
                                    <b>
                                      Score:
                                      <span className="details">
                                        {" "}
                                        {item.score}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                                <div className="revenue-lang-container">
                                  <div className="revenue-data">
                                    <b>
                                      <span>Revenue:</span>{" "}
                                      <span className="details">
                                        {" "}
                                        ${item.or_revenue}
                                      </span>{" "}
                                    </b>
                                  </div>

                                  <div className="sub-title language-data">
                                    <b>
                                      Language:
                                      <span className="details">
                                        {" "}
                                        {item.original_language}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </ReactiveList.ResultCardsWrapper>
                )}
              </ReactiveList>
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
