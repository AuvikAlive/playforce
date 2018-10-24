import { trimImage } from '../../../../functions/'
import { verticalMargin } from '../constants'

export const makeAuthor = async impactGeneralInfo => {
  const { displayName, title, company, signature } = impactGeneralInfo
  const trimmedSignature = await trimImage(signature)

  return [
    {
      text:
        'This test report cannot be reproduced in any way, except in full, without the prior written approval of the  author.',
      marginTop: verticalMargin * 3,
      marginBottom: verticalMargin,
    },
    {
      image: trimmedSignature,
      width: 65,
      marginBottom: verticalMargin,
    },
    {
      text: displayName,
      bold: true,
    },
    {
      text: title,
    },
    {
      text: company,
    },
  ]
}
