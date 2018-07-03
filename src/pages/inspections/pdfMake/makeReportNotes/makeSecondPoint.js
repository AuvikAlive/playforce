import { verticalMargin } from '../constants'

export const makeSecondPoint = standardItems => ({
  columnGap: 20,
  columns: [
    {
      width: 'auto',
      text: '2',
    },
    [
      {
        width: '*',
        text: 'Applicable Standards & Compliance',
        bold: true,
        marginBottom: verticalMargin / 2,
      },
      {
        text: `The equipment in this report has been assessed, were applicable, in accordance with ${standardItems.join(
          ' '
        )}`,
        marginBottom: verticalMargin,
      },
      {
        text:
          "Whilst compliance with standards is not mandatory in Australia, it is recommended. Compliance with Standards does not remove the operator's responsibility to ensure that equipment is safe and failure to comply does not necessarily mean that equipment is dangerous.",
        marginBottom: verticalMargin,
      },
    ],
  ],
})
