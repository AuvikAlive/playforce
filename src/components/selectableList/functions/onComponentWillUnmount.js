import { handleScroll } from './handleScroll'

export const onComponentWillUnmount = component => {
  window.removeEventListener('scroll', handleScroll(component), false)
}
