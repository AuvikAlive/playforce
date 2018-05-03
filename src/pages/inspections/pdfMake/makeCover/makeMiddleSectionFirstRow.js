import { verticalMargin } from '../globals'

export const makeMiddleSectionFirstRow = ({
  middleSectionFontSize,
  firstColumnWidth,
  name,
  location,
}) => {
  const { street, suburb, state, postcode, country } = location

  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  return {
    fontSize: middleSectionFontSize,
    columns: [
      {
        text: 'LOCATION',
        bold: true,
        width: firstColumnWidth,
      },
      [{ text: name, width: '*' }, { text: address }],
    ],
    marginTop: verticalMargin * 5,
  }
}
