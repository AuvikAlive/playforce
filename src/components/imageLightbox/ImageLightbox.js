import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import { state, reactModalStyle } from './constants/'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  closeLightbox,
  getPrevSrc,
  getNextSrc,
  goPrev,
  goNext,
  setToolbarButtons,
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
    const currentImage = images[photoIndex]

    return (
      showLightbox && (
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
      )
    )
  }
}
