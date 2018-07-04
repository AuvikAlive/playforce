import { riskLevels } from '../constants/'

export const getRiskLevel = (probability, severity) =>
  probability && severity ? riskLevels[probability - 1][severity - 1] : ''
