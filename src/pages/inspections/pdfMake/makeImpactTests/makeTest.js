import { verticalMargin } from '../globals'
import { makeSurface } from './makeSurface'
import { makeDrops } from './makeDrops'

const marginLeft = 85
const marginBottom = verticalMargin / 2

export const makeTest = ({ surface, dropTests }) => [
  makeSurface(marginLeft, marginBottom, surface),
  makeDrops(marginLeft, dropTests),
]
