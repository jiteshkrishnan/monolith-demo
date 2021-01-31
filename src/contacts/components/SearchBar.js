import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class SearchBar extends Component {

  onChangeFn = (event) =>this.props.onUserInput(event.target.value)
  
  render() {
    return (
      <input
        type="search"
        placeholder="Search"
        value={this.props.filterText}
        onChange={this.onChangeFn}
      />
    )
  }
}

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

/*

const getInput = (event) => event.target.value;

const SearchBar = ({ filterText, onUserInput }) => (
  <input
      type="search"
      placeholder="Search"
      value={ filterText }
      onChange={ event => onUserInput(getInput(event)) }
  />
);

SearchBar.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

export default SearchBar;
*/
