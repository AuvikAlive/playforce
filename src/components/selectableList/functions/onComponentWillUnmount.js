export const onComponentWillUnmount = component => {
  const { handleScroll } = component

  window.removeEventListener('scroll', handleScroll, false)
}
