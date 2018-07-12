export const onPrev = component => () => {
  const { currentSlide } = component.state

  currentSlide > 0 && component.carouselParent.carousel.slickPrev()
}
