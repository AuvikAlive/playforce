import { makeTitle } from '../makeTitle'
import { makeGeneralInfo } from './makeGeneralInfo'
import { makeTests } from './makeTests'

export const makeImpactTests = (
  impactGeneralInfo,
  impactTests,
  appliedStandards
) => [
  makeTitle('IMPACT ATTENUATION TEST'),
  makeGeneralInfo(impactGeneralInfo, appliedStandards),
  makeTests(impactTests),
]
