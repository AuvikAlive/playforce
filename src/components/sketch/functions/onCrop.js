import React from 'react'
import { Crop } from '../../../components/crop/Crop'
import { getCurrentImage } from './getCurrentImage'
import { saveCroppedImage } from './saveCroppedImage'

export const onCrop = component => () => {
  const { openDialog, closeDialog, aspectRatio } = component.props
  const { currentSlide } = component.state
  const image = getCurrentImage(component, currentSlide)

  return openDialog(
    <Crop
      closeDialog={closeDialog}
      aspectRatio={aspectRatio}
      image={image}
      onSubmit={saveCroppedImage(component, currentSlide)}
    />
  )
}
