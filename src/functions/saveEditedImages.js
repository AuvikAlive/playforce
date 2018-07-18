import { loadImages } from './loadImages'

export const saveEditedImages = component => images => {
  const { closeDialog } = component.props

  loadImages(component, images)
  closeDialog()
}
