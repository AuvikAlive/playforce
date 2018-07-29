import React, { Component } from 'react'
import Slider from 'react-slick'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { ImageLightbox } from '../imageLightbox/ImageLightbox'
import { StyledCarousel } from './StyledCarousel'
import { defaultSettings } from './defaultSettings'
import { goNext, goPrev } from './functions/'

export class Carousel extends Component {
  render() {
    const {
      images,
      settings,
      showNavs,
      showLightbox,
      loopLightbox,
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
                  ref={node => (this[`sketchParent${index}`] = node)}
                  image={image}
                  {...slideProps}
                />
              ) : (
                <img src={image} alt="carousel" />
              )}
            </div>
          ))}
        </Slider>

        {showLightbox && (
          <ImageLightbox
            loop={loopLightbox}
            images={images.map(({ image }) => image)}
          />
        )}

        {showNavs && (
          <div className="navs">
            <IconButton onClick={goPrev(this)}>
              <ArrowBackIcon />
            </IconButton>

            <IconButton onClick={goNext(this)}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </StyledCarousel>
    )
  }
}
