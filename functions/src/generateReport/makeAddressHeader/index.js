import { pageMarginVertical, logoOffset } from '../constants'
import { makeLogo } from './makeLogo'
import { makeAddress } from './makeAddress'

export const makeAddressHeader = organisation => ({
  marginTop: pageMarginVertical - logoOffset,
  columns: [makeLogo(), makeAddress(organisation)],
})
