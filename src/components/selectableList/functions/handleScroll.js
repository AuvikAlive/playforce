export const handleScroll = component => () => {
  component.setState({ scrolling: true })

  window.clearTimeout(component.scrollTimer)

  component.scrollTimer = setTimeout(() => {
    component.setState({ scrolling: false })
  }, 1000)
}
