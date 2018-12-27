import { pageMargins } from './pageMargins'
import { pageSize } from './pageSize'
import { makeHeader } from './makeHeader'
import { makeFooter } from './makeFooter'
import { logo } from './logo'
import { makeCover } from './makeCover/'

export const makeDocDefinition = requestBody => {
  const { reportPreferences, organisation } = requestBody
  const skipCommonHeaderFooter = 1

  const docDefinition = {
    pageMargins,
    pageSize,
    header: makeHeader(1),
    footer: makeFooter(
      skipCommonHeaderFooter,
      'Comprehensive Playground Inspection Report'
    ),
    images: {
      logo,
    },
    content: [makeCover(reportPreferences, organisation)],
  }

  return docDefinition
}
