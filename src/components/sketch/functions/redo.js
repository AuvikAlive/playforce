export const redo = (component, currentSlide) => () => {
  component.carouselParent[`sketchParent${currentSlide}`].redo()
}
