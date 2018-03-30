import {
  verticalMargin,
  headerFontSize,
  pageMargin,
  pageWidth,
} from './globals'

import chunk from 'lodash/chunk'

export const makeMaintenanceIssues = maintenanceIssues => {
  const maintenanceIssueItems = maintenanceIssues.map(
    ({ image, finding, equipment }, index) => [
      {
        image,
        width: (pageWidth - 2 * pageMargin) / 2 - 10,
        height: 170,
        marginBottom: verticalMargin,
      },
      {
        text: [
          {
            text: 'Issue #: ',
            bold: true,
          },
          `00${index + 1}`,
        ],
      },
      {
        text: [
          {
            text: 'Equipment Type: ',
            bold: true,
          },
          equipment,
        ],
      },
      {
        text: [
          {
            text: 'Finding: ',
            bold: true,
          },
          finding,
        ],
      },
    ],
  )

  const tuples = chunk(maintenanceIssueItems, 2)

  const grid = tuples.map((tuple, index, array) => {
    const row = {
      columns: tuple,
      marginBottom: verticalMargin,
    }

    if (index + 1 === array.length) {
      row.pageBreak = 'after'
    }

    return row
  })

  return [
    {
      text: 'IDENTIFIED MAINTENANCE ISSUES',
      font: 'Oswald',
      fontSize: headerFontSize,
      // bold: true,
      marginBottom: verticalMargin * 3,
    },
    grid,
  ]
}
