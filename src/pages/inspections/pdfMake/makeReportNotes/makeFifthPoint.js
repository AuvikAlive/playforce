import { verticalMargin } from '../constants'

export const makeFifthPoint = () => ({
  columnGap: 20,
  columns: [
    {
      width: 'auto',
      text: '5',
    },
    [
      {
        width: '*',
        text: 'Duty of Care',
        bold: true,
        marginBottom: verticalMargin / 2,
      },
      {
        text:
          'Play Force have a duty of care to report all issues that might affect safety regardless of whether they are the responsibility of the client or not.',
        marginBottom: verticalMargin,
      },
    ],
  ],
})
