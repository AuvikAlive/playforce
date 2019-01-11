import fetch from 'fetch-base64'

export const fetchImage = async imageUrl => {
  try {
    const data = await fetch.remote(imageUrl)

    return data[1]
  } catch (error) {
    return null
  }
}
