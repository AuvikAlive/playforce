export const makeItemsRow = ({
  pageFontSize,
  lineHeight,
  firstColumnWidth,
  marginBottom,
  conditionRatings,
}) => {
  const conditionRatingItems = conditionRatings.map(
    ({ equipment, manufacturer }) => ({
      text: `${equipment} - ${manufacturer}`,
      width: '*',
      lineHeight,
    })
  )

  return {
    fontSize: pageFontSize,
    marginBottom,
    columns: [
      {
        text: 'Items(s)',
        bold: true,
        italics: true,
        width: firstColumnWidth,
      },
      { text: ':', width: firstColumnWidth / 2 },
      conditionRatingItems,
    ],
  }
}
