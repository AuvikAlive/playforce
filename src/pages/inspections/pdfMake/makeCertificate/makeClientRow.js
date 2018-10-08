export const makeClientRow = ({
  pageFontSize,
  lineHeight,
  firstColumnWidth,
  marginBottom,
  client,
  clientAddress,
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
    { text: ':', width: pageFontSize },
    [{ text: client, width: '*', lineHeight }, { text: clientAddress }],
  ],
})
