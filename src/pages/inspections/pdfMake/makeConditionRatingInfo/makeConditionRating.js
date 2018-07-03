import { verticalMargin } from '../constants'

export const makeConditionRating = () => [
  {
    marginBottom: verticalMargin,
    text: 'Condition Ratings',
    bold: true,
  },
  {
    marginBottom: verticalMargin / 2,
    layout: 'noBorders',
    table: {
      widths: [100, '*'],
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
  },
]
