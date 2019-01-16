import { makeFirstPoint } from './makeFirstPoint'
import { makeSecondPoint } from './makeSecondPoint'
import { makeThirdPoint } from './makeThirdPoint'
import { makeFourthPoint } from './makeFourthPoint'
import { makeFifthPoint } from './makeFifthPoint'
import { makeSixthPoint } from './makeSixthPoint'

export const makeDefaultNotes = appliedStandards => {
  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => (index === 0 ? `${code}` : `, ${code}`)
  )

  return [
    makeFirstPoint(),
    makeSecondPoint(standardItems),
    makeThirdPoint(),
    makeFourthPoint(),
    makeFifthPoint(),
    makeSixthPoint(standardItems),
  ]
}
