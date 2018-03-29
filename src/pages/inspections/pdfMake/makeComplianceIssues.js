import {
  verticalMargin,
  headerFontSize,
  blue,
  green,
  yellow,
  pink,
  purple,
  lightGray,
} from './globals'
import { probabilities, severities, riskLevels } from '../../../globals/scales'

const colorMap = {
  V: blue,
  L: green,
  M: yellow,
  H: pink,
  VH: purple,
}

export const makeComplianceIssues = complianceIssues => {
  const complianceIssueItems = complianceIssues.map(
    (
      {
        image,
        finding,
        equipment,
        standardsClause,
        probability,
        severity,
        comments,
        recommendations,
      },
      index,
      array,
    ) => {
      const item = {
        marginBottom: verticalMargin * 3,
        // columnGap: 20,
        layout: 'lightHorizontalLines',
        table: {
          widths: ['auto', '*', '*', '*'],
          body: [
            [
              {
                image,
                width: 207,
                // height: 290,
                rowSpan: 6,
              },
              {
                text: 'Issue #:',
                bold: true,
              },
              `00${index + 1}`,
              equipment,
            ],
            [
              {},
              {
                text: 'Finding:',
                bold: true,
              },
              {
                text: finding,
                colSpan: 2,
              },
              {},
            ],
            [
              {},
              {
                text: 'Standards Clause:',
                bold: true,
              },
              {
                text: standardsClause,
                colSpan: 2,
              },
              {},
            ],
            [
              {},
              {
                text: 'Risk Assessment:',
                bold: true,
              },
              {
                colSpan: 2,
                layout: 'noBorders',
                alignment: 'center',
                table: {
                  widths: ['*', '*', '*'],
                  body: [
                    [
                      {
                        text: 'Probability',
                        bold: true,
                        fillColor: lightGray,
                      },
                      {
                        text: 'Injury Severity',
                        bold: true,
                        fillColor: lightGray,
                      },
                      {
                        text: 'Risk Level',
                        bold: true,
                        fillColor: lightGray,
                      },
                    ],
                    [
                      probabilities[probability - 1].probability,
                      severities[severity - 1].serverity,
                      {
                        text: riskLevels[probability - 1][severity - 1],
                        fillColor:
                          colorMap[
                            riskLevels[probability - 1][severity - 1]
                              .substring(0, 1)
                              .trim()
                          ],
                      },
                    ],
                  ],
                },
              },
              {},
            ],
            [
              {},
              {
                text: 'Comments:',
                bold: true,
              },
              {
                text: comments,
                colSpan: 2,
              },
              {},
            ],
            [
              {},
              {
                text: 'Recommendations:',
                bold: true,
              },
              {
                text: recommendations,
                colSpan: 2,
              },
              {},
            ],
          ],
        },
      }

      if (index + 1 === array.length) {
        item.pageBreak = 'after'
      }

      return item
    },
  )

  return [
    {
      text: 'IDENTIFIED COMPLIANCE ISSUES',
      fontSize: headerFontSize,
      bold: true,
      marginBottom: verticalMargin * 3,
    },
    complianceIssueItems,
  ]
}