import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import { StyledImageLightbox } from './StyledImageLightbox'
import { state, reactModalStyle } from './constants/'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  closeLightbox,
  getPrevSrc,
  getNextSrc,
  goPrev,
  goNext,
} from './functions/'

export class ImageLightbox extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  render() {
    const { photoIndex, isOpen } = this.state
    const { images } = this.props
    const imageArrayLength = images.length
    const showLightbox = isOpen && images && imageArrayLength > 0

    return (
      <StyledImageLightbox className="StyledImageLightbox">
        {showLightbox && (
          <Lightbox
            imagePadding={50}
            reactModalStyle={reactModalStyle}
            mainSrc={images[photoIndex]}
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
