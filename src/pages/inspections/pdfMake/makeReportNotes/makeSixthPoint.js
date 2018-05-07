import { verticalMargin } from '../globals'

export const makeSixthPoint = standardItems => ({
  columnGap: 20,
  columns: [
    {
      width: 'auto',
      text: '6',
    },
    [
      {
        width: '*',
        text: `${standardItems.join(' ')} Inspection Frequencies`,
        bold: true,
        marginBottom: verticalMargin / 2,
      },
      {
        columnGap: 0,
        columns: [
          {
            width: 50,
            text: '-',
            alignment: 'center',
          },
          {
            width: '*',
            text:
              'Comprehensive post-installation inspection - Prior to opening the playground',
          },
        ],
      },
      {
        columnGap: 0,
        columns: [
          {
            width: 50,
            text: '-',
            alignment: 'center',
          },
          {
            width: '*',
            text:
              'Routine inspection - Regularly, depending on site specific factors',
          },
        ],
      },
      {
        columnGap: 0,
        columns: [
          {
            width: 50,
            text: '-',
            alignment: 'center',
          },
          {
            width: '*',
            text:
              'Operational inspection - Regularly on a monthly or quarterly basis',
          },
        ],
      },
      {
        columnGap: 0,
        columns: [
          {
            width: 50,
            text: '-',
            alignment: 'center',
          },
          {
            width: '*',
            text: 'Comprehensive annual inspection - Annually',
          },
        ],
      },
    ],
  ],
})
