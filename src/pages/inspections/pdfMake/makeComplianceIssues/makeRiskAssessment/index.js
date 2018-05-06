import { makeTable } from './makeTable'

export const makeRiskAssessment = (probability, severity) => [
  {},
  {
    text: 'Risk Assessment:',
    bold: true,
    marginTop: 16,
  },
  makeTable(probability, severity),
  {},
]
