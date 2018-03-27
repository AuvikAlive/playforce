import { getPageWidth } from './getPageWidth'

export const setCoverImage = ({ doc, imgData }) => {
  const width = getPageWidth(doc)

  doc.addImage(imgData, 'JPEG', 0, 216, width, 432)
}
