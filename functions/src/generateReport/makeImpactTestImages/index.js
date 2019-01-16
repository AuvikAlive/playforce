import { makeTitle } from '../makeTitle'
import { makeTests } from './makeTests'

export const makeImpactTestImages = (impactTests, noPageBreak) => {
  if (
    impactTests &&
    impactTests.length > 0 &&
    impactTests.some(({ results }) => results.length > 0)
  ) {
    return [
      makeTitle('IMPACT TEST IMAGES'),
      makeTests(impactTests),
      noPageBreak ? null : { text: '', pageBreak: 'after' },
    ]
  } else {
    return null
  }
}
