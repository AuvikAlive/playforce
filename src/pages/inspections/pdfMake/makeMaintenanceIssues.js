import {
  verticalMargin,
  headerFontSize,
  // pageMarginHorizontal,
  // pageWidth,
} from './globals'
// import chunk from 'lodash/chunk'

export const makeMaintenanceIssues = maintenanceIssues => {
  const maintenanceIssueItems = maintenanceIssues.map(
    ({ images, finding, equipment, recommendations }, index, array) => [
      {
        columnGap: verticalMargin,
        columns: [
          {
            image: images[0].image,
            width: 207,
            marginBottom: verticalMargin,
          },
          [
            {
              marginTop: verticalMargin,
              text: [
                {
                  text: 'Issue #: ',
                  bold: true,
                },
                `00${index + 1}`,
              ],
            },
            {
              marginTop: verticalMargin,
              text: [
                {
                  text: 'Equipment Type: ',
                  bold: true,
                },
                equipment,
              ],
            },
            {
              marginTop: verticalMargin,
              text: [
                {
                  text: 'Finding: ',
                  bold: true,
                },
                finding,
              ],
            },
            {
              marginTop: verticalMargin,
              pageBreak: index + 1 === array.length ? 'after' : null,
              text: [
                {
                  text: 'Recommendation: ',
                  bold: true,
                },
                recommendations,
              ],
            },
          ],
        ],
      },
      // {
      //   image,
      //   width: (pageWidth - 2 * pageMarginHorizontal) / 2 - 10,
      //   height: 170,
      //   marginBottom: verticalMargin,
      // },
      // {
      //   text: [
      //     {
      //       text: 'Issue #: ',
      //       bold: true,
      //     },
      //     `00${index + 1}`,
      //   ],
      // },
      // {
      //   text: [
      //     {
      //       text: 'Equipment Type: ',
      //       bold: true,
      //     },
      //     equipment,
      //   ],
      // },
      // {
      //   text: [
      //     {
      //       text: 'Finding: ',
      //       bold: true,
      //     },
      //     finding,
      //   ],
      //   pageBreak: index + 1 === array.length ? 'after' : null,
      // },
    ],
  )

  // const tuples = chunk(maintenanceIssueItems, 2)

  // const grid = tuples.map((tuple, index, array) => {
  //   const row = {
  //     columns: tuple,
  //     marginBottom: verticalMargin * 2,
  //   }

  //   if (index + 1 === array.length) {
  //     row.pageBreak = 'after'
  //   }

  //   return row
  // })

  return [
    {
      text: 'IDENTIFIED MAINTENANCE ISSUES',
      font: 'Oswald',
      fontSize: headerFontSize,
      // bold: true,
      marginBottom: verticalMargin * 2,
    },
    maintenanceIssueItems,
  ]
}
