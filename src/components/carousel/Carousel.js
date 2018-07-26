import React, { Component } from 'react'
import Slider from 'react-slick'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SlideshowIcon from '@material-ui/icons/Slideshow'
import { ImageLightbox } from '../imageLightbox/ImageLightbox'
import { StyledCarousel } from './StyledCarousel'
import { defaultSettings } from './defaultSettings'
import { toggleLightbox, goNext, goPrev } from './functions/'

export class Carousel extends Component {
  state = { lightboxOpen: false }

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

    const { lightboxOpen } = this.state

    const mergedSettings = { ...defaultSettings, ...settings }

    return (
      <StyledCarousel className="StyledCarousel" onClick={toggleLightbox(this)}>
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
          <div className="hoverEffect">
            <SlideshowIcon color="primary" className="icon" />
          </div>
        )}

        {showLightbox && (
          <ImageLightbox
            loop={loopLightbox}
            isOpen={lightboxOpen}
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
