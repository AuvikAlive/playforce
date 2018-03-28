import { vertical, headerFontSize, fontSize } from './globals'

const blue = '#a4c2f4'
const green = '#b6d7a8'
const yellow = '#ffe599'
const pink = '#ea9999'
const purple = '#b4a7d6'

export const conditionRatingInfo = [
  {
    text: 'CONDITION RATING & RISK ASSESSMENT',
    fontSize: headerFontSize,
    bold: true,
  },
  {
    text:
      '"Play provision should aim at managing the balance between the need to offer risk and the need to keep children safe from serious harm… In play provision exposure to some degree of risk may be of benefit because it satisfies a basic human need and gives children the chance to learn about risk and consequences in a controlled environment." - Foreword to AS 4685.1–2014',
    marginTop: vertical,
    italics: true,
  },
  {
    text:
      'A Risk/Benefit assessment takes into account the benefits of an activity or feature in the playground, as well as the associated risks, weighing with equal consideration the duty to protect children from avoidable serious harm and the duty to provide them with stimulating, adventurous play opportunities.',
    marginTop: vertical,
  },
  {
    table: {
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
      widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto'],
    },
    marginTop: vertical,
    alignment: 'center',
  },
]
