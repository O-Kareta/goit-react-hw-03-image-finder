import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.modul.css';

export class Modal extends Component {
  render() {
    const { imageUrl, altText, handleCloseModal } = this.props;

    return (
      <div onClick={handleCloseModal} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={imageUrl} alt={altText} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

