import { verticalMargin } from '../globals'

export const makeMiddleSectionSecondRow = ({
  sectionFontSize,
  firstColumnWidth,
  client,
}) => ({
  fontSize: sectionFontSize,
  columns: [
    { text: 'CLIENT', bold: true, width: firstColumnWidth },
    { text: client, width: '*' },
  ],
  marginTop: verticalMargin * 2,
})
