/* eslint-disable */
import React, { FC } from 'react'
import styled from 'styled-components'
import ImageGallery from "react-image-gallery";

import emptyBlank from '../../../../assets/image/emptyBlank.png'
import { ReactComponent as ArrowBackSVG } from '../../../../assets/svg/arrowBack.svg';
import { ReactComponent as ArrowForwardSVG } from '../../../../assets/svg/arrowForward.svg';

import './AlbumCarousel.css'

interface IAlbumCarousel {
  images?: {
    original: string
    thumbnail: string
  }[]
}

const StyledAlbumCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const AlbumCarousel: FC<IAlbumCarousel> = ({ images }) => {

  if (images === undefined) {
    return (
      <img src={emptyBlank} alt="" />
    )
  }
  return (
    <StyledAlbumCarousel data-name='album-carousel'>
      {images && <ImageGallery
        showPlayButton={false}
        thumbnailPosition='left'
        items={images}
        renderLeftNav={(onClick, disabled): any => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
            style={{ outline: 'none', filter: 'none' }}
          >
            <ArrowBackSVG />
          </button>
        )}
        renderRightNav={(onClick, disabled): any => (
          <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
            style={{ outline: 'none', filter: 'none' }}
          >
            <ArrowForwardSVG />
          </button>
        )}
      />}
    </StyledAlbumCarousel>
  )
}

export default AlbumCarousel