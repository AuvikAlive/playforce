import Cropper from 'cropperjs'
import { getBase64MimeType } from '../../../functions/'

export const onComponentDidMount = component => {
  const image = document.getElementById('image')
  const { aspectRatio } = component.props
  const src = image.src
  const mimeType = getBase64MimeType(src)

  component.setState({ mimeType })

  component.cropper = new Cropper(image, {
    aspectRatio: aspectRatio || 16 / 9,
    zoomable: false,
    background: false,

    crop(event) {},
  })
}
