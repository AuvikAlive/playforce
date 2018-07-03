import { subHeaderFontSize, verticalMargin } from '../constants'

export const makeFalling = () => [
  {
    text: 'PROTECTION AGAINST FALLING',
    font: 'Oswald',
    fontSize: subHeaderFontSize,
    marginBottom: verticalMargin / 2,
  },
  {
    marginBottom: verticalMargin,
    table: {
      widths: ['*'],
      body: [
        ['Is the impact area adequate for the free height of fall?'],
        ['Is the falling space free of obstacles that could cause injury?'],
        [
          'Are barriers, guardrails and handrails appropriate and at the correct heights?',
        ],
        [
          'Are openings in the barriers or guardrails less than 800mm in width?',
        ],
      ],
    },
  },
]
