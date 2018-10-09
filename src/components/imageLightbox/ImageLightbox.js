import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import SlideshowIcon from '@material-ui/icons/Slideshow'
import 'react-image-lightbox/style.css'
import { StyledImageLightbox } from './StyledImageLightbox'
import { state, reactModalStyle } from './constants/'
import {
  openLightbox,
  closeLightbox,
  getPrevSrc,
  getNextSrc,
  goPrev,
  goNext,
  setToolbarButtons,
} from './functions/'

export class ImageLightbox extends Component {
  state = state

  render() {
    const { photoIndex, isOpen } = this.state
    const { images } = this.props
    const imageArrayLength = images.length
    const showLightbox = isOpen && images && imageArrayLength > 0
    const currentImage = images[photoIndex]

    return (
      <StyledImageLightbox
        className="StyledImageLightbox"
        onClick={openLightbox(this)}
      >
        <div className="hoverEffect">
          <SlideshowIcon color="secondary" className="icon" />
        </div>

        {showLightbox && (
          <Lightbox
            toolbarButtons={setToolbarButtons(currentImage, photoIndex)}
            imagePadding={60}
            reactModalStyle={reactModalStyle}
            mainSrc={currentImage}
            prevSrc={getPrevSrc(imageArrayLength, images, photoIndex)}
            nextSrc={getNextSrc(imageArrayLength, images, photoIndex)}
            onMovePrevRequest={goPrev(this, photoIndex, images)}
            onMoveNextRequest={goNext(this, photoIndex, images)}
            onCloseRequest={closeLightbox(this)}
          />
        )}
      </StyledImageLightbox>
    )
  }
}
