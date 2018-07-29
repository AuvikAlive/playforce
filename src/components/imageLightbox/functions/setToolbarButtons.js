import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import { downloadImage } from './downloadImage'

export const setToolbarButtons = (image, index) => {
  const fileName = `image${index + 1}`

  return [
    <IconButton onClick={() => downloadImage(image, fileName)}>
      <CloudDownloadIcon
        className="lightbox-download-icon"
        // style={{ color: 'darkGray' }}
      />
    </IconButton>,
  ]
}
