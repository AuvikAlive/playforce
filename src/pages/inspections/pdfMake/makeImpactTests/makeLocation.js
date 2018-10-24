import { getAddressFromLocation } from '../../../../functions/'
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
        text: getAddressFromLocation(location),
      },
    ],
  ],
})
