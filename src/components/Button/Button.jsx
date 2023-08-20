import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

export class Button extends Component {
  render() {
    const { loadMore } = this.props;

    return (
      <button className={css.Button} onClick={loadMore}>
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

