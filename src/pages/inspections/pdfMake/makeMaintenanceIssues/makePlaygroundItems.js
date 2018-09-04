import { makeSubtitle } from '../makeSubtitle'
import { makeIndividualItems } from './makeIndividualItems'

export const makePlaygroundItems = playgrounds =>
  playgrounds.map(({ name, maintenanceIssues }) => ({
    unbreakable: true,
    stack: [makeSubtitle(name), makeIndividualItems(maintenanceIssues)],
  }))
