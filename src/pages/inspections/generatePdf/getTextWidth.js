export const getTextWidth = (doc, text) =>
  doc.getStringUnitWidth(text) * doc.internal.getFontSize()
