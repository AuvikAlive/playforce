import { makeSubtitle } from '../makeSubtitle'
import { makeIndividualItems } from './makeIndividualItems'

export const makePlaygroundItems = playgrounds =>
  playgrounds.map(({ name, complianceIssues }) => ({
    unbreakable: true,
    stack: [makeSubtitle(name), makeIndividualItems(complianceIssues)],
  }))
