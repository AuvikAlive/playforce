import { pageWidth, pageMarginHorizontal, verticalMargin } from '../globals'

export const makeImage = image => ({
  image,
  width: (pageWidth - 2 * pageMarginHorizontal) / 2 - 10,
  height: 170,
  marginBottom: verticalMargin,
})
