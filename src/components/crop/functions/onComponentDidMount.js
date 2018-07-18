import Cropper from 'cropperjs'

export const onComponentDidMount = component => {
  const image = document.getElementById('image')
  const { aspectRatio } = component.props
  const src = image.src
  const mimeType = src.substring('data:'.length, src.indexOf(';base64'))

  component.setState({ mimeType })

  component.cropper = new Cropper(image, {
    aspectRatio: aspectRatio || 16 / 9,
    zoomable: false,
    background: false,

    crop(event) {},
  })
}
