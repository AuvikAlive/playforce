import { flatten, map, filter } from 'lodash'
import { generatePdf } from '../../pdfMake/generatePdf'

export const createPdf = component => async inspection => {
  const { displayName, standards, defaultCertificateText } = component.props

  inspection.displayName = displayName

  const appliedStandards = flatten(
    map(inspection.cover.appliedStandards, standardId => {
      return filter(standards, item => item.id === standardId)
    })
  )

  let inspectionWithAppliedStandards = {
    ...inspection,
    cover: { ...inspection.cover, appliedStandards },
  }

  const pdfDocGenerator = await generatePdf(
    inspectionWithAppliedStandards,
    defaultCertificateText
  )

  return pdfDocGenerator
}