export const makeClientRow = ({
  pageFontSize,
  firstColumnWidth,
  marginBottom,
  client,
}) => ({
  fontSize: pageFontSize,
  marginBottom,
  columns: [
    {
      text: 'Client',
      bold: true,
      italics: true,
      width: firstColumnWidth,
    },
    { text: ':', width: firstColumnWidth / 2 },
    { text: client, width: '*' },
  ],
})
