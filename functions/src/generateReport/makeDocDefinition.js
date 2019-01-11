import { pageMargins } from './pageMargins'
import { pageSize } from './pageSize'
import { makeHeader } from './makeHeader'
import { makeFooter } from './makeFooter'
import { logo } from './logo'
import { makeCover } from './makeCover/'

export const makeDocDefinition = async requestBody => {
  const {
    reportPreferences,
    organisation,
    inspection,
    site,
    client,
    author,
  } = requestBody

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
    content: [
      await makeCover({
        reportPreferences,
        organisation,
        inspection,
        site,
        client,
        author,
      }),
    ],
  }

  return docDefinition
}
