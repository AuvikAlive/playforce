import { getTextCenterOffset } from './getTextCenterOffset'

export const setTitle = ({ doc, headlineSize }) => {
  doc.setFontStyle('bold')
  doc.setFontSize(headlineSize)

  const text = 'COMPREHENSIVE PLAYGROUND INSPECTION REPORT'
  const left = getTextCenterOffset({ doc, text })

  doc.text(left, 140, text)
}
