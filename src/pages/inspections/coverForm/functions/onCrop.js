import React from 'react'
import { Crop } from '../../../../components/crop/Crop'

export const onCrop = component => () => {
  const {
    openDialog,
    closeDialog,
    aspectRatio,
    image,
    setCapturedImage,
  } = component.props

  return openDialog(
    <Crop
      closeDialog={closeDialog}
      image={image}
      aspectRatio={aspectRatio}
      onSubmit={image => setCapturedImage(image)}
    />
  )
}
