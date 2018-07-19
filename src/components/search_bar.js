import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="col-md-12 mb-3 search-bar">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>

      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;