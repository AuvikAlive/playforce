import { loadImages } from '../../../../functions/'

export const saveImages = component => images => {
  const { closeDialog } = component.props

  loadImages(this, images)
  closeDialog()
}
