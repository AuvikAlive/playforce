import {
  loadInitialData,
  loadImages,
  showImageNumberNotPortraitError,
} from '../../../../functions/'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { imageCaptured, initialData, images } = nextProps

  if (initialData && initialData !== component.props.initialData) {
    loadInitialData(component, initialData)
  }

  if (imageCaptured && images !== component.props.images) {
    loadImages(component, images)
    showImageNumberNotPortraitError(component, images)
  }
}
