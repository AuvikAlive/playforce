import {
  verticalMargin,
  headerFontSize,
  pageWidth,
  pageMarginHorizontal,
} from './globals'

export const makeMaintenanceIssues = maintenanceIssues => {
  const maintenanceIssueItems = maintenanceIssues.map(
    ({ images, finding, equipment, recommendations }, index, array) => {
      const columnGap = 10
      const imageWidth =
        (pageWidth - pageMarginHorizontal * 2 - columnGap * 3) / 3

      const item = [
        {
          unbreakable: true,
          marginBottom: verticalMargin,
          columnGap: verticalMargin,
          columns: [
            {
              image: images[0].image,
              width: imageWidth,
            },
            [
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
              {
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
      ]

      if (images.length > 1) {
        // const marginLeft = 5
        const extraImages = images.slice(1)
        const imageItems = extraImages.map(({ image }, index, array) => ({
          image,
          width: imageWidth,
        }))

        item.push({
          // pageBreak: 'after',
          // marginLeft,
          unbreakable: true,
          marginBottom: verticalMargin,
          columnGap,
          columns: imageItems,
        })
      }

      if (index + 1 === array.length) {
        if (images.length > 1) {
          item[1].pageBreak = 'after'
        } else {
          item[0].pageBreak = 'after'
        }
      }

      return item
    }
  )

  return [
    {
      text: 'IDENTIFIED MAINTENANCE ISSUES',
      font: 'Oswald',
      fontSize: headerFontSize,
      // bold: true,
      marginBottom: verticalMargin,
    },
    maintenanceIssueItems,
  ]
}
