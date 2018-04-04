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

const title = {
  text: 'IDENTIFIED COMPLIANCE ISSUES',
  fontSize: headerFontSize,
  font: 'Oswald',
  // bold: true,
  // marginBottom: verticalMargin * 3,
}

export const makeComplianceIssues = (
  complianceIssues,
  complianceIssuesAdded,
) => {
  if (!complianceIssuesAdded) {
    return [
      {
        ...title,
        marginBottom: verticalMargin,
      },
      {
        text: 'No compliance issues identified',
        // alignment: 'center',
        pageBreak: 'after',
      },
    ]
  }
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
        marginTop: verticalMargin * 3,
        // marginBottom: verticalMargin * 3,
        // columnGap: 20,
        // layout: 'lightHorizontalLines',
        layout: {
          hLineWidth: function(i, node) {
            return i === 0 || i === node.table.body.length ? 0 : 1
          },
          vLineWidth: function(i, node) {
            return 0
          },
          hLineColor: function(i, node) {
            return lightGray
          },
          vLineColor: function(i, node) {
            return lightGray
          },
          paddingLeft: function(i, node) {
            return 4
          },
          paddingRight: function(i, node) {
            return i === 3 ? 0 : 4
          },
          paddingTop: function(i, node) {
            return i === 3 ? 0 : 8
          },
          paddingBottom: function(i, node) {
            return i === 3 ? 0 : 8
          },
        },
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
                marginTop: 16,
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
                              .substring(0, 2)
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

      if (index + 1 !== array.length && index !== 0 && (index + 1) % 2 === 0) {
        item.pageBreak = 'after'
      }

      // if (index + 1 !== array.length && index !== 0 && (index + 1) % 3 === 0) {
      //   item.pageBreak = 'after'
      // }

      return item
    },
  )

  return [title, complianceIssueItems]
}
