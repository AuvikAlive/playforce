import { headerFontSize, verticalMargin, lightGray } from '../constants'

export const makeSubtitle = subtitle => ({
  text: subtitle,
  font: 'Oswald',
  fontSize: headerFontSize,
  marginBottom: verticalMargin,
  color: lightGray,
})
