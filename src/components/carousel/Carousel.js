import React from 'react'
import Slider from 'react-slick'

const defaultSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
}

export const Carousel = ({ images, settings }) => {
  const mergedSettings = { ...defaultSettings, ...settings }

  return (
    <Slider {...mergedSettings}>
      {images.map(({ image }, index) => (
        <div key={index}>
          <img src={image} alt="carousel" />
        </div>
      ))}
    </Slider>
  )
}
