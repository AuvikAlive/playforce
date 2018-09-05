import { equipmentSettings } from '../equipmentSettings'

export const getError = (freeFallHeight, equipmentSetting) => {
  if (freeFallHeight) {
    if (freeFallHeight < 600) {
      return 'For playground equipment with a free height of fall not exceeding 600 mm and which does not cause forced movement on the body of the user, it is not necessary to provide an impact attenuating surface beneath or surrounding that equipment item.'
    } else if (
      equipmentSetting &&
      equipmentSetting === equipmentSettings[0] &&
      freeFallHeight > 3000
    ) {
      return 'The free height of fall shall not exceed 3000 mm.'
    } else if (
      equipmentSetting &&
      equipmentSetting === equipmentSettings[1] &&
      freeFallHeight > 1800
    ) {
      return 'The free height of fall for SECS shall not exceed 1800 mm.'
    }
  }

  return ''
}
