import { flatten, map, filter } from 'lodash'
import { generateImpactTestPdf } from '../../pdfMake/makeStandaloneImpactTest/generateImpactTestPdf'

export const generateImpactTestReport = (
  impactGeneralInfo,
  impactTests,
  userId,
  fetchStandards
) => async setFeedback => {
  const standards = await fetchStandards(userId)

  const appliedStandards = flatten(
    map(impactGeneralInfo.appliedStandards, standardId => {
      return filter(standards, item => item.id === standardId)
    })
  )

  const pdfDocGenerator = await generateImpactTestPdf(
    impactGeneralInfo,
    impactTests,
    appliedStandards
  )

  pdfDocGenerator.download(
    `${impactGeneralInfo.location.name} - Impact Attenuation Test.pdf`,
    () => setFeedback({ loading: false })
  )
}
