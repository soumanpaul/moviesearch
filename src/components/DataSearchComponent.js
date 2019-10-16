import React from "react";
import { DataSearch } from "@appbaseio/reactivesearch";

class Datasearch extends React.Component {
  render() {
    
    return (
      <DataSearch
        componentId="mainSearch"
        dataField={["original_title"]}
        categoryField="title"
        className="search-bar"
        queryFormat="and"
        placeholder="Search for movies..."
        iconPosition="left"
        autosuggest={false}
        filterLabel="search"
      />
    );
  }
}

export default Datasearch;