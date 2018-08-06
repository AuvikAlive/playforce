export const onComponentWillUnmount = component => {
  window.removeEventListener('resize', component.handleResize, false)
}
