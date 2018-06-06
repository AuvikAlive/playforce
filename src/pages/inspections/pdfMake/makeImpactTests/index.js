import { makeTitle } from '../makeTitle'
import { makeGeneralInfo } from './makeGeneralInfo'

export const makeImpactTests = (
  impactGeneralInfo,
  impactTests,
  appliedStandards
) => [
  makeTitle('IMPACT ATTENUATION TEST'),
  makeGeneralInfo(impactGeneralInfo, appliedStandards),
]
