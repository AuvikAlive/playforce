export const makeSiteLocationRow = ({
  pageFontSize,
  lineHeight,
  firstColumnWidth,
  marginBottom,
  location,
}) => {
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  return {
    fontSize: pageFontSize,
    marginBottom,
    columns: [
      {
        text: 'Site Location',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: firstColumnWidth / 2 },
      [{ text: name, width: '*', lineHeight }, { text: address }],
    ],
  }
}
