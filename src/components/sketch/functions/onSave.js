import { getCurrentImage } from './getCurrentImage'
import { saveCurrentImage } from './saveCurrentImage'

export const onSave = component => () => {
  const { currentSlide } = component.state
  const image = getCurrentImage(component, currentSlide)

  saveCurrentImage(component, currentSlide, image)
}
