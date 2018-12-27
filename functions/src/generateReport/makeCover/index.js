import { makeAddressHeader } from '../makeAddressHeader'
import { makeTitle } from './makeTitle'
// import { makeCoverImage } from './makeCoverImage'
// import { makeMiddleSection } from './makeMiddleSection'

export const makeCover = (reportPreferences, organisation) => {
  return [
    makeAddressHeader(organisation),
    makeTitle(reportPreferences.title),
    // makeCoverImage(image),
    // makeMiddleSection({
    //   location,
    //   client,
    //   inspectionDate,
    //   displayName,
    //   appliedStandards,
    // }),
  ]
}
