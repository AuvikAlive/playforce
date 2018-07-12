export const undo = (component, currentSlide) => () => {
  component.carouselParent[`sketchParent${currentSlide}`].undo()
}
