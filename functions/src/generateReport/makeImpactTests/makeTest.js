import { verticalMargin } from '../constants'
import { makeSurface } from './makeSurface'
import { makeDrops } from './makeDrops'
import { makeComment } from './makeComment'

const marginLeft = 85
const marginBottom = verticalMargin / 2

export const makeTest = surface => {
  const { results, comment } = surface

  return results.length > 0
    ? [
        makeSurface(surface, marginLeft, marginBottom),
        makeDrops(
          results,
          marginLeft,
          comment ? marginBottom : verticalMargin * 2
        ),
        makeComment(comment, marginLeft),
      ]
    : null
}
