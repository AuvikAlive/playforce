import { inspectionTypes } from '../../globals/constants'

export const makeReportTitle = inspectionType => {
  let title

  if (inspectionType && inspectionType === inspectionTypes[3]) {
    title = `${inspectionType} Report`
  } else {
    title = `${inspectionType || 'Comprehensive'} Playground Inspection Report`
  }

  return title
}
