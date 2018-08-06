import { clear } from './clear'
import { setSignature } from './setSignature'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { imageCaptured, image } = nextProps
  const { props } = component

  if (imageCaptured && image !== props.image) {
    clear(component)()
    setSignature(component)(image)
  }
}
