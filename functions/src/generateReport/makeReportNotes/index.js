import { makeTitle } from './makeTitle'
import { makeSubtitle } from './makeSubtitle'
import { makeCustomNotes } from './makeCustomNotes'
import { makeDefaultNotes } from './makeDefaultNotes'
import { makeOutro } from './makeOutro'

export const makeReportNotes = (appliedStandards, reportNotes) => [
  makeTitle(),
  makeSubtitle(),
  reportNotes && reportNotes.length > 0
    ? makeCustomNotes(reportNotes)
    : makeDefaultNotes(appliedStandards),
  makeOutro(),
]
