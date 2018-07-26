import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import { StyledImageLightbox } from './StyledImageLightbox'
import { state, reactModalStyle } from './constants/'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  closeLightbox,
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
            mainSrc={images[photoIndex]}
            nextSrc={
              imageArrayLength === 1
                ? null
                : images[(photoIndex + 1) % imageArrayLength]
            }
            prevSrc={
              imageArrayLength === 1
                ? null
                : images[(photoIndex + imageArrayLength - 1) % imageArrayLength]
            }
            reactModalStyle={reactModalStyle}
            onCloseRequest={closeLightbox(this)}
            onMovePrevRequest={goPrev(this, photoIndex, images)}
            onMoveNextRequest={goNext(this, photoIndex, images)}
          />
        )}
      </StyledImageLightbox>
    )
  }
}
