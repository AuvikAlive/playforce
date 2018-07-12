export const onSlideChange = component => (current, next) => {
  if (next !== current) {
    component.setState({ currentSlide: next })
  }
}
