import { equipmentTypes } from '../../../../constants/'
import { submitItem } from './submitItem'
import { submitAncillaryItem } from './submitAncillaryItem'

export const submit = component => () => {
  const { itemType } = component.state

  if (itemType !== equipmentTypes[2]) {
    submitItem(component)
  } else {
    submitAncillaryItem(component)
  }
}
