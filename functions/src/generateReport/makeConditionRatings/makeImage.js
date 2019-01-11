import { pageWidth, pageMarginHorizontal, verticalMargin } from '../constants'
import { fetchImage } from '../utils/'

export const makeImage = async imageUrl => {
  const image = await fetchImage(imageUrl)

  return image
    ? {
        image,
        width: (pageWidth - 2 * pageMarginHorizontal) / 2 - 10,
        height: 170,
        marginBottom: verticalMargin,
      }
    : null
}
