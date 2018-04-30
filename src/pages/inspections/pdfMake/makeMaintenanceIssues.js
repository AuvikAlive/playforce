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
          columnGap: verticalMargin,
          columns: [
            {
              image: images[0].image,
              width: imageWidth,
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
                pageBreak:
                  images.length === 1 && index + 1 === array.length
                    ? 'after'
                    : null,
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
          pageBreak: 'after',
          // marginLeft,
          marginTop: verticalMargin,
          columnGap,
          columns: imageItems,
        })
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
