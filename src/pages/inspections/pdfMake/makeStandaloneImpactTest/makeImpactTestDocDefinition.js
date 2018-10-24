import { pageMargins } from '../pageMargins'
import { pageSize } from '../pageSize'
import { makeHeader } from '../makeHeader'
import { makeFooter } from '../makeFooter'
import { makeImpactTests } from '../makeImpactTests/'
import { makeImpactTestImages } from '../makeImpactTestImages/'
import { makeAuthor } from './makeAuthor'
import { logo } from '../logo'

export const makeImpactTestDocDefinition = async (
  impactGeneralInfo,
  impactTests,
  appliedStandards
) => {
  const skipCommonHeaderFooter = 0

  return {
    pageMargins,
    pageSize,
    header: makeHeader(skipCommonHeaderFooter),
    footer: makeFooter(skipCommonHeaderFooter, 'Impact Attenuation Test'),
    content: [
      makeImpactTests(impactGeneralInfo, impactTests, appliedStandards),
      makeImpactTestImages(impactTests, true),
      await makeAuthor(impactGeneralInfo),
    ],
    images: {
      logo,
    },
  }
}
