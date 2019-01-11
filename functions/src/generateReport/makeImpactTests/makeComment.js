import { verticalMargin } from '../constants'

export const makeComment = (comment, marginLeft) =>
  comment
    ? [
        {
          marginLeft,
          marginBottom: verticalMargin * 2,
          text: [
            {
              text: 'Comment: ',
              bold: true,
            },
            {
              text: comment,
            },
          ],
        },
      ]
    : null
