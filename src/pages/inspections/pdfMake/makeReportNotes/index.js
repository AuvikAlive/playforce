import { makeTitle } from './makeTitle'
import { makeSubtitle } from './makeSubtitle'
import { makeFirstPoint } from './makeFirstPoint'
import { makeSecondPoint } from './makeSecondPoint'
import { makeThirdPoint } from './makeThirdPoint'
import { makeFourthPoint } from './makeFourthPoint'
import { makeFifthPoint } from './makeFifthPoint'
import { makeSixthPoint } from './makeSixthPoint'
import { makeOutro } from './makeOutro'

export const makeReportNotes = ({ appliedStandards }) => {
  const standardItems = appliedStandards.map(
    ({ code, title }, index, array) => (index === 0 ? `${code}` : `, ${code}`)
  )

  return [
    makeTitle(),
    makeSubtitle(),
    makeFirstPoint(),
    makeSecondPoint(standardItems),
    makeThirdPoint(),
    makeFourthPoint(),
    makeFifthPoint(),
    makeSixthPoint(standardItems),
    makeOutro(),
  ]
}
