import {
  verticalMargin,
  headerFontSize,
  subHeaderFontSize,
  fontSize,
  blue,
  green,
  yellow,
  pink,
  purple,
} from './globals'

export const makeConditionRatingInfo = () => {
  return [
    {
      text: 'CONDITION RATING & RISK ASSESSMENT',
      font: 'Oswald',
      fontSize: headerFontSize,
      // bold: true,
    },
    {
      text:
        '"Play provision should aim at managing the balance between the need to offer risk and the need to keep children safe from serious harm… In play provision exposure to some degree of risk may be of benefit because it satisfies a basic human need and gives children the chance to learn about risk and consequences in a controlled environment." - Foreword to AS 4685.1–2014',
      marginTop: verticalMargin,
      italics: true,
    },
    {
      text:
        'A Risk/Benefit assessment takes into account the benefits of an activity or feature in the playground, as well as the associated risks, weighing with equal consideration the duty to protect children from avoidable serious harm and the duty to provide them with stimulating, adventurous play opportunities.',
      marginTop: verticalMargin,
    },
    {
      text: 'RISK ASSESSMENT MATRIX',
      fontSize: subHeaderFontSize,
      font: 'Oswald',
      // bold: true,
      marginTop: verticalMargin,
    },
    {
      marginTop: verticalMargin,
      alignment: 'center',
      table: {
        widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto'],
        body: [
          [
            'E',
            'Highly Likely',
            {
              text: 'VL (7)',
              fillColor: blue,
            },
            {
              text: 'L (13)',
              fillColor: green,
            },
            {
              text: 'H (22)',
              fillColor: pink,
            },
            {
              text: 'VH (24)',
              fillColor: purple,
            },
            {
              text: 'VH (25)',
              fillColor: purple,
            },
          ],
          [
            'D',
            'Likely',
            {
              text: 'VL (6)',
              fillColor: blue,
            },
            {
              text: 'L (12)',
              fillColor: green,
            },
            {
              text: 'M (18)',
              fillColor: yellow,
            },
            {
              text: 'H (21)',
              fillColor: pink,
            },
            {
              text: 'VH (23)',
              fillColor: purple,
            },
          ],
          [
            'C',
            'Possible',
            { text: 'VL (5)', fillColor: blue },
            {
              text: 'L (11)',
              fillColor: green,
            },
            {
              text: 'M (16)',
              fillColor: yellow,
            },
            {
              text: 'H (19)',
              fillColor: pink,
            },
            {
              text: 'H (20)',
              fillColor: pink,
            },
          ],
          [
            'B',
            'Unlikely',
            { text: 'VL (3)', fillColor: blue },
            { text: 'VL (4)', fillColor: blue },
            {
              text: 'L (10)',
              fillColor: green,
            },
            {
              text: 'M (15)',
              fillColor: yellow,
            },
            {
              text: 'M (17)',
              fillColor: yellow,
            },
          ],
          [
            'A',
            'Very Unlikely',
            { text: 'VL (1)', fillColor: blue },
            { text: 'VL (2)', fillColor: blue },
            {
              text: 'L (8)',
              fillColor: green,
            },
            {
              text: 'L (9)',
              fillColor: green,
            },
            {
              text: 'M (14)',
              fillColor: yellow,
            },
          ],
          [
            {
              text: 'Probability',
              colSpan: 2,
              rowSpan: 2,
              marginTop: fontSize,
              bold: true,
              border: [false, false, false, false],
            },
            {},
            'Little/none',
            'Minor',
            'Moderate',
            'Serious',
            'Permanent',
          ],
          [{}, {}, '1', '2', '3', '4', '5'],
        ],
      },
    },
    {
      text: 'Injury Severity',
      bold: true,
      marginLeft: 500,
      marginTop: verticalMargin,
    },
    {
      marginTop: verticalMargin,
      table: {
        widths: ['*', '*'],
        body: [
          [
            {
              text: 'Severity Rating',
              bold: true,
            },
            {
              text: 'Potential level of injury',
              bold: true,
            },
          ],
          ['Little/none', 'Little or no injury'],
          ['Minor', 'Minor injury (e.g. bruising or laceration)'],
          ['Moderate', 'Moderate injury requiring medical intervention'],
          ['Serious', 'Serious injury likely to require hospitalisation'],
          [
            'Permanent',
            'Serious injury likely to result in permanent disability or fatality',
          ],
        ],
      },
    },
    {
      marginTop: verticalMargin,
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
      marginTop: verticalMargin / 2,
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
    {
      marginTop: verticalMargin,
      text: 'Condition Ratings',
      bold: true,
    },
    {
      marginTop: verticalMargin / 2,
      table: {
        widths: ['*', '*'],
        body: [
          [
            {
              text:
                ' (Individual items of equipment detailed on the following page)',
              colSpan: 2,
              fillColor: '#999999',
              color: 'white',
            },
            {},
          ],
          [
            '1 - Excellent',
            'No damage. Condition as new or near new. No maintenance requirements.',
          ],
          [
            '2 - Good',
            'Only minor signs deterioration to surface finishes. No major defects. Minor maintenance may be required.',
          ],
          [
            '3 - Average',
            'Moderate wear and tear, including surface deterioration. Minor maintenance intervention and/or minor component replacement required.',
          ],
          [
            '4 - Poor',
            'Significant deterioration and/or equipment damage. Maintenance and/or component replacement required.',
          ],
          [
            '5 - Failed',
            'Severe deterioration or equipment damage and/or serious structural problems. Equipment requires decommissioning and/or replacement.',
          ],
        ],
      },
      layout: 'noBorders',
    },
    {
      text: '* Based on IPWEA asset condition assessment guidelines.',
      marginLeft: 360,
      pageBreak: 'after',
    },
  ]
}
