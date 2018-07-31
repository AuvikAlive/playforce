export const onComponentDidMount = component => {
  const { handleScroll } = component

  window.addEventListener('scroll', handleScroll, false)
}
