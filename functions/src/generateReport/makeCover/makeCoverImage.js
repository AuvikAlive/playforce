import { pageWidth, pageMarginHorizontal } from '../constants'
import { fetchImage } from '../utils/'

export const makeCoverImage = async imageUrl => {
  const image = await fetchImage(imageUrl)

  return image
    ? {
        image,
        width: pageWidth,
        marginLeft: -pageMarginHorizontal,
        height: 432,
      }
    : null
}
