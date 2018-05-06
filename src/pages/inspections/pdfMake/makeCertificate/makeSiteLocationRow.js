import { verticalMargin } from '../globals'

export const makeSiteLocationRow = (
  pageFontSize,
  firstColumnWidth,
  location
) => {
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  return {
    fontSize: pageFontSize,
    marginBottom: verticalMargin * 3,
    columns: [
      {
        text: 'Site Location',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: firstColumnWidth / 2 },
      [{ text: name, width: '*' }, { text: address }],
    ],
  }
}
