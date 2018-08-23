import { makeSubtitle } from './makeSubtitle'
import { makeIndividualItems } from './makeIndividualItems'

export const makePlaygroundItems = playgrounds => {
  const playgroundItems = playgrounds.map(({ name, conditionRatings }) => [
    makeSubtitle(name),
    makeIndividualItems(conditionRatings),
  ])

  return playgroundItems
}
