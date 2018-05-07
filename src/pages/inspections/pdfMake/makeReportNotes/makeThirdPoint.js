import { verticalMargin } from '../globals'

export const makeThirdPoint = () => ({
  columnGap: 20,
  columns: [
    {
      width: 'auto',
      text: '3',
    },
    [
      {
        width: '*',
        text: 'Current State of Equipment',
        bold: true,
        marginBottom: verticalMargin / 2,
      },
      {
        text:
          'This report is based on the equipment as found at the time of inspection. Events following the inspection may lead to site conditions changing. Where subsequent major changes have been identified, it may be appropriate to inspect the site again.',
        marginBottom: verticalMargin,
      },
    ],
  ],
})
