import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, handleImageClick } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map((image, index) => (
          <ImageGalleryItem
            callback={() => handleImageClick(image.largeImageURL)}
            key={index}
            image={image}
            index={index}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

