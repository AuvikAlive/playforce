import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
}

export const Carousel = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map(({ image }, index) => (
        <div key={index}>
          <img src={image} alt="carousel" />
        </div>
      ))}
    </Slider>
  )
}
