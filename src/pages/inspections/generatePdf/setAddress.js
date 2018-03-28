import { getTextWidth } from './getTextWidth'

export const setAddress = ({ doc, topMargin, lineHeight, fontSize }) => {
  const top = topMargin
  const left = 380

  doc.setFontStyle('bold')
  doc.text(left, top, 'POSTAL ADDRESS')
  doc.setFontStyle('normal')
  doc.text(left, top + lineHeight, '34-36 Calcium Court')
  doc.text(left, top + 2 * lineHeight, 'Crestmead QLD 4132')
  doc.setFontStyle('bold')
  doc.text(left, top + 3 * lineHeight, 'ABN: ')
  doc.setFontStyle('normal')
  doc.text(
    left + getTextWidth(doc, 'ABN: '),
    top + 3 * lineHeight,
    '69 106 457 176',
  )
}
