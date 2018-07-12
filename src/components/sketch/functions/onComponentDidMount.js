import { getWidth } from './getWidth'

export const onComponentDidMount = component => {
  const { images } = component.props

  if (images && images.length > 0) {
    const width = getWidth('.StyledSketch')
    component.setState({ width, images, imagesLength: images.length })
  }
}
