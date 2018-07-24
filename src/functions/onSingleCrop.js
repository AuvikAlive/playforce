import React from 'react'
import { Crop } from '../components/crop/Crop'

export const onSingleCrop = (component, aspectRatio) => () => {
  const { openDialog, closeDialog, image, setCapturedImage } = component.props

  return openDialog(
    <Crop
      closeDialog={closeDialog}
      image={image}
      aspectRatio={aspectRatio}
      onSubmit={image => setCapturedImage(image)}
    />
  )
}
