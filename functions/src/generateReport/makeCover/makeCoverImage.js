import { pageWidth, pageMarginHorizontal } from '../constants'
import fetch from 'fetch-base64'

export const makeCoverImage = async imageUrl => {
  try {
    const data = await fetch.remote(imageUrl)

    return {
      image: data[1],
      width: pageWidth,
      marginLeft: -pageMarginHorizontal,
      height: 432,
    }
  } catch (error) {
    return null
  }
}
