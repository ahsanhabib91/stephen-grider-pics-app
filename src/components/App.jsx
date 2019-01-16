import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    console.log("[App] componentDidMount()");
  }

  componentDidUpdate() {
    console.log("[App] componentDidUpdate()");
  }

  onSerchSubmit = async term => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    console.log("[App] render()");
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSerchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
