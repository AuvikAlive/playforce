import { format } from 'date-fns/esm'

export const setCover = ({ doc, leftMargin, fontSize, lineHeight, cover }) => {
  const valueLeftOffset = 232
  const top = 722
  const { location, client, inspectionDate, displayName } = cover
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street} , ${suburb} ${state} ${postcode}, ${country}`

  doc.setFontStyle('bold')
  doc.setFontSize(fontSize)
  doc.text(leftMargin, top, 'LOCATION')
  doc.setFontStyle('normal')
  doc.text(valueLeftOffset, top, name)
  doc.text(valueLeftOffset, top + lineHeight, address)
  doc.setFontStyle('bold')
  doc.text(leftMargin, top + 3 * lineHeight, 'CLIENT')
  doc.setFontStyle('normal')
  doc.text(valueLeftOffset, top + 3 * lineHeight, client)
  doc.setFontStyle('bold')
  doc.text(leftMargin, top + 5 * lineHeight, 'INSPECTION DATE')
  doc.setFontStyle('normal')
  doc.text(
    valueLeftOffset,
    top + 5 * lineHeight,
    format(inspectionDate, 'DD MMMM YYYY'),
  )
  doc.setFontStyle('bold')
  doc.text(380, top + 5 * lineHeight, 'INSPECTED BY')
  doc.setFontStyle('normal')
  doc.text(540, top + 5 * lineHeight, displayName)
}
