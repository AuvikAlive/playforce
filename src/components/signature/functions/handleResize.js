import { setSignature } from './setSignature'

export const handleResize = component => () => {
  setSignature(component)()
}
