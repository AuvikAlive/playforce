import { verticalMargin } from '../constants'
import { makeSurface } from './makeSurface'
import { makeDrops } from './makeDrops'

const marginLeft = 85
const marginBottom = verticalMargin / 2

export const makeTest = ({ surface, dropTests }) =>
  dropTests.length > 0
    ? [
        makeSurface(marginLeft, marginBottom, surface),
        makeDrops(marginLeft, dropTests),
      ]
    : null
