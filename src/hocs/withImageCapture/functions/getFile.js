import { getImage } from './getImage'

export const getFile = component => async event => {
  const { multiple } = component.state
  const fileList = event.target.files

  if (multiple && fileList.length > 0) {
    const imagePromises = Array.from(fileList).map(
      async file => await getImage(component, file)
    )

    const images = await Promise.all(imagePromises)

    component.setState({ images, imageCaptured: true })
  } else if (fileList[0]) {
    const image = await getImage(component, fileList[0])

    component.setState({ ...image, imageCaptured: true })
  }
}
