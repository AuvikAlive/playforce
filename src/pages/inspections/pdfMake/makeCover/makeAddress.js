import { makeFirstAddressRow } from './makeFirstAddressRow'
import { makeSecondAddressRow } from './makeSecondAddressRow'
import { makeThirdAddressRow } from './makeThirdAddressRow'
import { makeFourthAddressRow } from './makeFourthAddressRow'

export const makeAddress = () => ({
  layout: 'noBorders',
  marginLeft: 110,
  table: {
    body: [
      makeFirstAddressRow(),
      makeSecondAddressRow(),
      makeThirdAddressRow(),
      makeFourthAddressRow(),
    ],
  },
})
