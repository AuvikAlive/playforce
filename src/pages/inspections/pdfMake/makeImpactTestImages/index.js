import { makeTitle } from '../makeTitle'
import { makeTests } from './makeTests'

export const makeImpactTestImages = impactTests => {
  if (
    impactTests &&
    impactTests.length > 0 &&
    impactTests.some(({ dropTests }) => dropTests.length > 0)
  ) {
    return [
      makeTitle('IMPACT TEST IMAGES'),
      makeTests(impactTests),
      { text: '', pageBreak: 'after' },
    ]
  } else {
    return null
  }
}
