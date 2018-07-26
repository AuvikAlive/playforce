import React, { Component } from 'react'
import { ImageLightbox } from '../imageLightbox/ImageLightbox'
import { StyledTestComponent } from './StyledTestComponent'
import logan from './images/logan-city-logo.jpg'

const images = [logan]

class TestComponent extends Component {
  render() {
    return (
      <StyledTestComponent className="StyledTestComponent">
        <ImageLightbox images={images} />
      </StyledTestComponent>
    )
  }
}

export default TestComponent
