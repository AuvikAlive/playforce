import { defaultInspectionTypes } from '../../constants/'

export const makeReportTitle = inspectionType => {
  let title

  if (inspectionType && inspectionType === defaultInspectionTypes[3]) {
    title = `${inspectionType} Report`
  } else {
    title = `${inspectionType || 'Comprehensive'} Playground Inspection Report`
  }

  return title
}
