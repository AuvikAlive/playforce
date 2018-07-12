import { handleScroll } from './handleScroll'

export const onComponentDidMount = component => {
  window.addEventListener('scroll', handleScroll(component), false)
}
