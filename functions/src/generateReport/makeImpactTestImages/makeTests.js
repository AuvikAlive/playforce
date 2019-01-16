import { makeHeader } from './makeHeader'
import { makeDrops } from './makeDrops'

export const makeTests = impactTests => {
  return impactTests.map(({ location, type, material, results }) => {
    return {
      unbreakable: true,
      stack: [makeHeader({ location, type, material }), makeDrops(results)],
    }
  })
}
