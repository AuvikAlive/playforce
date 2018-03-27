export const setTitle = ({ doc, leftMargin, fontSize }) => {
  doc.setFontStyle('bold')
  doc.setFontSize(1.9 * fontSize)
  doc.text(leftMargin, 140, 'COMPREHENSIVE PLAYGROUND INSPECTION REPORT')
}
