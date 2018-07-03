import { headerFontSize, verticalMargin } from './constants'

export const makeTitle = title => ({
  text: title,
  font: 'Oswald',
  fontSize: headerFontSize,
  marginBottom: verticalMargin,
})
