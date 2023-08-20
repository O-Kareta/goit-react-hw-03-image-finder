import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { image, index, callback } = this.props;

    return (
      <li onClick={callback} className={css.ImageGalleryItem} key={index}>
        <img
          className={css.ImageGalleryItemImage}
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};
