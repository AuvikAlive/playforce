import { verticalMargin } from '../globals'

export const makeSurface = (
  marginLeft,
  marginBottom,
  { location, surfaceType, material, condition }
) => [
  {
    marginLeft,
    marginBottom,
    text: 'Surface Details:',
    decoration: 'underline',
    bold: true,
  },
  {
    marginLeft,
    marginBottom,
    columns: [
      {
        text: 'Location within site',
        bold: true,
      },
      {
        text: 'Description',
        bold: true,
      },
      {
        text: 'Condition',
        bold: true,
      },
    ],
  },
  {
    marginLeft,
    marginBottom: verticalMargin,
    columns: [location, `${surfaceType} - ${material}`, condition],
  },
]
