import { format } from 'date-fns'
import { equipmentTypes } from './equipmentTypes'

const today = new Date()

export const equipmentState = {
  itemType: equipmentTypes[0],
  equipment: '',
  assetId: '',
  manufacturer: '',
  estimatedDateInstalled: format(today, 'YYYY'),
}
