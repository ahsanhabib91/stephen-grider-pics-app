import React from "react";

class SearchBar extends React.Component {
  componentDidMount() {
    console.log("[SearchBar] componentDidMount()");
  }

  componentDidUpdate() {
    console.log("[SearchBar] componentDidUpdate()");
  }
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  searchHandler = event => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  render() {
    console.log("[SearchBar] render()");
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="First Name"
              value={this.state.term}
              onChange={this.searchHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
