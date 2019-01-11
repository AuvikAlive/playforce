import { makeSubtitle } from '../makeSubtitle'
import { makeIndividualItems } from './makeIndividualItems'

export const makePlaygroundItems = playgrounds =>
  playgrounds.map(({ name, conditionRatings }) => [
    makeSubtitle(name),
    makeIndividualItems(conditionRatings),
  ])

// export const makePlaygroundItems = playgrounds =>
//   playgrounds.map(({ name, conditionRatings }) => ({
//     unbreakable: true,
//     stack: [makeSubtitle(name), makeIndividualItems(conditionRatings)],
//   }))
