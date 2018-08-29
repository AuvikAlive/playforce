import { makeHeader } from './makeHeader'
import { makeDrops } from './makeDrops'

export const makeTests = impactTests =>
  impactTests.map(({ surface, dropTests }) => ({
    unbreakable: true,
    stack: [makeHeader(surface), makeDrops(dropTests)],
  }))
