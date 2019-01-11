import { formatSiteAddress } from '../utils/'
import { verticalMargin } from '../constants'

export const makeMiddleSectionFirstRow = ({
  sectionFontSize,
  firstColumnWidth,
  name,
  location,
}) => {
  const address = formatSiteAddress(location)

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
