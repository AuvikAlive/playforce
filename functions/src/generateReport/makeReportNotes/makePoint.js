import { verticalMargin } from '../constants'

export const makePoint = ({ number, title, description }) => ({
  columnGap: 20,
  columns: [
    {
      width: 'auto',
      text: number,
    },
    [
      {
        width: '*',
        text: title,
        bold: true,
        marginBottom: verticalMargin / 2,
      },
      {
        text: description,
        marginBottom: verticalMargin,
      },
    ],
  ],
})
