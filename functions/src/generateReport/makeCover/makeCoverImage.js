import { pageWidth, pageMarginHorizontal } from '../constants'

export const makeCoverImage = image =>
  image
    ? {
        image,
        width: pageWidth,
        marginLeft: -pageMarginHorizontal,
        height: 432,
      }
    : null
