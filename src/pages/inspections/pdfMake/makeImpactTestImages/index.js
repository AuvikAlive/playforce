import { makeTitle } from '../makeTitle'
import { makeImages } from './makeImages'

export const makeImpactTestImages = impactTests => {
  if (
    impactTests &&
    impactTests.length > 0 &&
    impactTests.some(({ dropTests }) => dropTests.length > 0)
  ) {
    return [
      makeTitle('IMPACT TEST IMAGES'),
      makeImages(impactTests),
      { text: '', pageBreak: 'after' },
    ]
  } else {
    return null
  }
}
