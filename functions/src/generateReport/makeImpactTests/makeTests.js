import { verticalMargin } from '../constants'
import { makeTest } from './makeTest'

export const makeTests = impactTests => {
  const testItems = impactTests.map(item => makeTest(item))

  return [
    {
      text: 'Test Results:',
      decoration: 'underline',
      bold: true,
      marginBottom: verticalMargin,
    },
    testItems,
  ]
}
