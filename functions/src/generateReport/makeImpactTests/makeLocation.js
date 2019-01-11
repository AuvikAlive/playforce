import { formatSiteAddress } from '../utils/'
import { verticalMargin } from '../constants'

export const makeLocation = (firstColumnWidth, location) => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Site Location:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    [
      {
        text: location.name,
      },
      {
        text: formatSiteAddress(location),
      },
    ],
  ],
})
