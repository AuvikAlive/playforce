export const onNext = component => () => {
  const { imagesLength, currentSlide } = component.state

  currentSlide + 1 < imagesLength &&
    component.carouselParent.carousel.slickNext()
}
