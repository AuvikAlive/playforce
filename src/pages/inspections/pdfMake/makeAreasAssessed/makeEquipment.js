import { subHeaderFontSize, verticalMargin } from '../globals'

export const makeEquipment = () => [
  {
    text: 'EQUIPMENT (general)',
    font: 'Oswald',
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Are the footings adequately covered?'],
        ['Are the foundations stable and free of movement?'],
        [
          'Is the equipment free of protrusions or sharp edges that may be hazardous?',
        ],
        ['Are all components present and secure?'],
        [
          'Is the equipment in good repair (i.e. free from excessive rust, cracked welds, splintering timber, etc.)?',
        ],
        [
          'Are all items of equipment within the maximum free height of fall (<3.0m; upper body <2.2m; SECS <1.8m)',
        ],
      ],
    },
  },
]
