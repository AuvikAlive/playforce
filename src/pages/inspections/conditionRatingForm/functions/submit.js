import { equipmentTypes } from '../../../../constants/'
import { submitEquipment } from './submitEquipment'
import { submitAncillaryEquipment } from './submitAncillaryEquipment'

export const submitConditionRatingAndEquipment = component => () => {
  const { itemType } = component.state
  const isNotAncillary = itemType !== equipmentTypes[2]

  if (isNotAncillary) {
    submitEquipment(component)
  } else {
    submitAncillaryEquipment(component)
  }
}
