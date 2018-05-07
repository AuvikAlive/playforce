import { subHeaderFontSize, verticalMargin } from '../globals'

export const makeParts = () => [
  {
    text: 'MOVING PARTS',
    font: 'Oswald',
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    pageBreak: 'after',
    table: {
      widths: ['*'],
      body: [
        ['Is the free space adequate for forced movement items?'],
        ['Is the equipment free of crush or shear points?'],
        ['Are the chains and connectors free of excessive wear (<40%)'],
        ["Are moving and 'sealed for life' parts moving freely?"],
      ],
    },
  },
]
