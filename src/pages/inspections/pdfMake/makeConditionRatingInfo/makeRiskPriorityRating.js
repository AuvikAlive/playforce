import { verticalMargin } from '../globals'

export const makeRiskPriorityRating = () => [
  {
    marginBottom: verticalMargin,
    columns: [
      {
        text: 'Risk Ratings',
        bold: true,
      },
      {
        text: 'Priority Ratings',
        bold: true,
      },
    ],
  },
  {
    marginBottom: verticalMargin / 2,
    layout: 'noBorders',
    table: {
      widths: ['*', '*', '*', '*'],
      body: [
        [
          {
            text:
              ' (See the following pages for ratings for each issue or non-compliance identified, if any)',
            colSpan: 4,
            fillColor: '#999999',
            color: 'white',
          },
          {},
          {},
          {},
        ],
        ['VH', 'Very High', 'Very High', 'Requires urgent action'],
        ['H', 'High', 'High', 'Action as soon as possible'],
        ['M', 'Moderate', 'Medium', 'Should be actioned but not urgent'],
        ['L', 'Low', 'Low', 'Low risk - customer to determine priority'],
        ['VL', 'Very Low', 'Very Low', 'No action required'],
      ],
    },
  },
]
