import { subHeaderFontSize, verticalMargin } from '../globals'

export const makeSurfacing = () => [
  {
    text: 'SURFACING',
    font: 'Oswald',
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Is the depth of loose-fill surfacing adequate?'],
        ['Is the surface of unitary surfaces in good repair?'],
        ['Is the surface free of any trip hazards?'],
        [
          'Is the surface and surrounding area free of objects that may cause injury (e.g. broken glass)?',
        ],
      ],
    },
  },
]
