import { makeTitle } from '../makeTitle'
import { makeGeneralInfo } from './makeGeneralInfo'
import { makeTests } from './makeTests'
import { makeDisclaimer } from './makeDisclaimer'

export const makeImpactTests = (
  impactGeneralInfo,
  impactTests,
  appliedStandards
) => {
  if (impactTests && impactTests.length > 0) {
    return [
      makeTitle('IMPACT ATTENUATION TEST'),
      makeGeneralInfo(impactGeneralInfo, appliedStandards),
      makeTests(impactTests),
      makeDisclaimer(),
    ]
  } else {
    return null
  }
}
