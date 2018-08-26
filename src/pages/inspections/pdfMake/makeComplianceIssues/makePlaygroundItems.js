import { makeSubtitle } from '../makeSubtitle'
import { makeIndividualItems } from './makeIndividualItems'

export const makePlaygroundItems = playgrounds => {
  const playgroundItems = playgrounds.map(({ name, complianceIssues }) => [
    makeSubtitle(name),
    makeIndividualItems(complianceIssues),
  ])

  return playgroundItems
}
