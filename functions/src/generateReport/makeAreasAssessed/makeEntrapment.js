import { subHeaderFontSize, verticalMargin } from '../constants'

export const makeEntrapment = () => [
  {
    text: 'PROTECTION AGAINST ENTRAPMENT',
    font: 'Oswald',
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Is the equipment free of head and neck entrapments?'],
        ['Is the equipment free of finger entrapments?'],
        ['Is the equipment free of clothing entrapments?'],
        ['Is the equipment free of whole body entrapments?'],
        ['Is the equipment free of foot or leg entrapments?'],
      ],
    },
  },
]
