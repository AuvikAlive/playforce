import { pageMarginVertical, logoOffset } from '../globals'
import { makeLogo } from './makeLogo'
import { makeAddress } from './makeAddress'

export const makeHeader = () => ({
  marginTop: pageMarginVertical - logoOffset,
  columns: [makeLogo(), makeAddress()],
})
