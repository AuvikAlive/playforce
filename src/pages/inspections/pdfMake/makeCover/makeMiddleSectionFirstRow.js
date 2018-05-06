import { verticalMargin } from '../globals'

export const makeMiddleSectionFirstRow = ({
  sectionFontSize,
  firstColumnWidth,
  name,
  location,
}) => {
  const { street, suburb, state, postcode, country } = location

  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  return {
    fontSize: sectionFontSize,
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
