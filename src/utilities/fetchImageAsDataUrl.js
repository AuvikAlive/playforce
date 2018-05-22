import { getDataUrlFromBlob } from './getDataUrlFromBlob'

export const fetchImageAsDataUrl = async url => {
  const response = await fetch(url)
  const blob = await response.blob()
  const dataUrl = await getDataUrlFromBlob(blob)

  return dataUrl
}
