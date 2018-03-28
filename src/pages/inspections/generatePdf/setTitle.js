import { getTextCenterOffset } from './getTextCenterOffset'

export const setTitle = ({ doc, fontSize }) => {
  doc.setFontStyle('bold')
  doc.setFontSize(1.9 * fontSize)

  const text = 'COMPREHENSIVE PLAYGROUND INSPECTION REPORT'
  const left = getTextCenterOffset({ doc, text })

  doc.text(left, 140, text)
}
