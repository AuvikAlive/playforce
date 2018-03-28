import { getPageWidth } from './getPageWidth'

export const getTextCenterOffset = ({ doc, text }) => {
  const pageWidth = getPageWidth(doc)

  const leftOffset =
    pageWidth / 2 -
    doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2

  return leftOffset
}
