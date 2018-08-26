import { headerFontSize, verticalMargin, gray } from './constants'

export const makeSubtitle = subtitle => ({
  text: subtitle,
  font: 'Oswald',
  fontSize: headerFontSize,
  marginBottom: verticalMargin,
  color: gray,
})
