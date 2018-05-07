import { subHeaderFontSize, verticalMargin } from '../globals'

export const makeSurrounds = () => [
  {
    text: 'SURROUNDS',
    font: 'Oswald',
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        [
          'Are pathways around playground free of trip hazards (from cracks, etc.)?',
        ],
        ['Is access from car park appropriate for users of all abilities?'],
        [
          'Is the area free of dead overhanging branches that may potentially fall onto the playground?',
        ],
        [
          'Are ancillary items (tables, seats, shade structures, fences, gates, etc.) in good repair?',
        ],
      ],
    },
  },
]
