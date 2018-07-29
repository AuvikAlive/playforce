import { getBase64MimeType } from '../../../functions/'

export const downloadImage = (image, fileName) => {
  let link = document.createElement('a')

  const mimeType = getBase64MimeType(image)
  const imageType = mimeType.substring(mimeType.indexOf('/') + 1)

  link.setAttribute('href', image)
  link.setAttribute('download', `${fileName}.${imageType}`)
  link.style.display = 'none'

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}
