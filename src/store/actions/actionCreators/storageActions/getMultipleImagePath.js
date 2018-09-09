import { getImagePath } from './getImagePath'

export const getMultipleImagePath = (ref, index) =>
  `${getImagePath(ref)}/image${index}`
