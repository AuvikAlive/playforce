import React from 'react'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { StyledIconButton } from '../StyledIconButton'
import { downloadImage } from './downloadImage'

export const setToolbarButtons = (image, index) => {
  const fileName = `image${index + 1}`

  return [
    <StyledIconButton onClick={() => downloadImage(image, fileName)}>
      <CloudDownloadIcon className="lightbox-icon" />
    </StyledIconButton>,
  ]
}
