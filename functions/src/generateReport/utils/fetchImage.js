import fetch from 'node-fetch'

export const fetchImage = async imageUrl => {
  try {
    const response = await fetch(imageUrl)
    const type = response.headers['content-type']
    const buffer = await response.buffer()
    const image = `data:${type};base64,${buffer.toString('base64')}`

    return image
  } catch (error) {
    // console.log(error)
    return null
  }
}
