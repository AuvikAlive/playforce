export const getTextCenterOffset = ({ doc, text }) => {
  const leftOffset =
    doc.internal.pageSize.width / 2 -
    doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2

  return leftOffset
}
