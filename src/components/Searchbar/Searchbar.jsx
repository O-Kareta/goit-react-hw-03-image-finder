import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchBar: '',
  };

  handleInputChange = e => {
    this.setState({ searchBar: e.target.value });
  };

  handleSearchSubmit = () => {
    this.props.onSearchSubmit(this.state.searchBar);
  };

  render() {
    return (
      <div className={css.Searchbar}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSearchSubmit();
          }}
          className={css.SearchForm}
        >
          <button type="submit" className={css.SearchFormButton}>
            Search
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            value={this.state.searchBar}
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

