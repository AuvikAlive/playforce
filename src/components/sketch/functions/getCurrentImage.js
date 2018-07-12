export const getCurrentImage = (component, currentSlide) => {
  const image = component.carouselParent[
    `sketchParent${currentSlide}`
  ]._sketch.toDataURL()

  return image
}
