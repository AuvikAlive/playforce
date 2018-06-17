import { pageWidth, pageMarginHorizontal } from '../globals'

export const makeCoverImage = image =>
  image
    ? {
        image,
        width: pageWidth,
        marginLeft: -pageMarginHorizontal,
        height: 432,
      }
    : null
