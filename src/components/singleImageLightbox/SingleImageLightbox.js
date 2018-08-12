import React from 'react'
import { ImageLightbox } from '../imageLightbox/ImageLightbox'
import { StyledSingleImageLightbox } from './StyledSingleImageLightbox'

export const SingleImageLightbox = ({ image, alt }) => {
  return (
    <StyledSingleImageLightbox className="StyledSingleImageLightbox">
      <img src={image} className="card-media" alt={alt || 'card media'} />
      <ImageLightbox images={[image]} />
    </StyledSingleImageLightbox>
  )
}
