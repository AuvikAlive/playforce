import { makeAddressHeader } from '../makeAddressHeader'
import { makeTitle } from './makeTitle'
import { makeCoverImage } from './makeCoverImage'
import { makeMiddleSection } from './makeMiddleSection'

export const makeCover = ({
  inspectionType,
  image,
  location,
  client,
  inspectionDate,
  displayName,
  appliedStandards,
}) => {
  return [
    makeAddressHeader(),
    makeTitle(inspectionType),
    makeCoverImage(image),
    makeMiddleSection({
      location,
      client,
      inspectionDate,
      displayName,
      appliedStandards,
    }),
  ]
}
