import { makeFirstRow } from './makeFirstRow'
import { makeSecondRow } from './makeSecondRow'
import { makeThirdRow } from './makeThirdRow'
import { makeFourthRow } from './makeFourthRow'

export const makeAddress = ({ address, phone, email, website }) => {
  return {
    layout: 'noBorders',
    marginLeft: 110,
    table: {
      body: [
        makeFirstRow(),
        makeSecondRow(address.street, phone),
        makeThirdRow(address, email),
        makeFourthRow(website),
      ],
    },
  }
}
