import React, { Component } from 'react'
import Slider from 'react-slick'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { StyledCarousel } from './StyledCarousel'
import { defaultSettings } from './defaultSettings'

export class Carousel extends Component {
  render() {
    const {
      images,
      settings,
      showNavs,
      SlideComponent,
      slideProps,
    } = this.props

    const mergedSettings = { ...defaultSettings, ...settings }

    return (
      <StyledCarousel className="StyledCarousel">
        <Slider {...mergedSettings} ref={node => (this.carousel = node)}>
          {images.map(({ image }, index) => (
            <div key={index}>
              {SlideComponent ? (
                <SlideComponent
                  ref={c => (this[`sketchParent${index}`] = c)}
                  image={image}
                  {...slideProps}
                />
              ) : (
                <img src={image} alt="carousel" />
              )}
            </div>
          ))}
        </Slider>

        {showNavs && (
          <div className="navs">
            <IconButton onClick={() => this.carousel.slickPrev()}>
              <ArrowBackIcon />
            </IconButton>

            <IconButton onClick={() => this.carousel.slickNext()}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </StyledCarousel>
    )
  }
}
