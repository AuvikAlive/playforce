import downscale from 'downscale'
import { loadImage } from './loadImage'

export const getImage = async (component, file) => {
  const { returnBlob } = component.state

  const image = await loadImage(file)

  const { naturalHeight, naturalWidth } = image

  const imageNaturalAspectRatio = naturalWidth / naturalHeight

  const {
    width = 1024,
    height = Number(((1 / imageNaturalAspectRatio) * width).toFixed(2)),
  } = component.state

  const scaledImage = await downscale(image, width, height, {
    imageType: file.type,
    quality: 1,
    ...(returnBlob && { returnBlob: true }),
  })

  return {
    image: returnBlob ? URL.createObjectURL(scaledImage) : scaledImage,
    imageNaturalAspectRatio,
  }
}
