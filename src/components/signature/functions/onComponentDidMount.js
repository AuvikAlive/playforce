import { setSignature } from './setSignature'

export const onComponentDidMount = component => {
  setSignature(component)()

  window.addEventListener('resize', component.handleResize, false)
}
