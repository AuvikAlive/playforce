import { makeAddressHeader } from '../makeAddressHeader'
import { makeTitle } from './makeTitle'
import { makeCoverImage } from './makeCoverImage'
import { makeMiddleSection } from './makeMiddleSection'

export const makeCover = async ({
  reportPreferences,
  organisation,
  inspection,
  site,
  client,
  author,
}) => {
  return [
    makeAddressHeader(organisation),
    makeTitle(reportPreferences.title),
    await makeCoverImage(inspection.coverImage),
    makeMiddleSection({
      location: site,
      client: client.name,
      inspectionDate: inspection['date-time'],
      displayName: author.name,
      appliedStandards: inspection.standards,
    }),
  ]
}
