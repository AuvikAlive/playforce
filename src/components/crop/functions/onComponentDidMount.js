import Cropper from 'cropperjs'
import { getBase64MimeType } from '../../../functions/'

export const onComponentDidMount = component => {
  const image = document.getElementById('image')
  const { src, naturalWidth, naturalHeight } = image
  const { aspectRatio } = component.props
  const mimeType = getBase64MimeType(src)

  component.setState({ mimeType })

  component.cropper = new Cropper(image, {
    aspectRatio: aspectRatio || naturalWidth / naturalHeight,
    zoomable: false,
    background: false,

    crop(event) {},
  })
}
