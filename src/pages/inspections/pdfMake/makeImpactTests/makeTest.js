import { verticalMargin } from '../globals'
import { makeSurface } from './makeSurface';

const marginLeft = 85
const marginBottom = verticalMargin / 2

export const makeTest = ({ surface }) => [
  makeSurface(marginLeft, marginBottom, surface)
]
