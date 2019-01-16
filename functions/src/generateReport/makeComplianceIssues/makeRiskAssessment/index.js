import { makeTable } from './makeTable'

export const makeRiskAssessment = (...args) => {
  return [
    {},
    {
      text: 'Risk Assessment:',
      bold: true,
      marginTop: 16,
    },
    makeTable(...args),
    {},
  ]
}
