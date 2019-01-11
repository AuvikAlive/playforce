import { makeTitle } from '../makeTitle'
import { makeGeneralInfo } from './makeGeneralInfo'
import { makeTests } from './makeTests'
import { makeDisclaimer } from './makeDisclaimer'

export const makeImpactTests = (impactTest, appliedStandards) => {
  return [
    makeTitle('IMPACT ATTENUATION TEST'),
    makeGeneralInfo(impactTest, appliedStandards),
    makeTests(impactTest.surfaces),
    makeDisclaimer(),
  ]
}
