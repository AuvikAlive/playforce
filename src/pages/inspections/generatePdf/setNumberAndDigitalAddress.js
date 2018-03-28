import { getTextWidth } from './getTextWidth'

export const setNumberAndDigitalAddress = ({
  doc,
  topMargin,
  lineHeight,
  fontSize,
}) => {
  const left = 510
  const top = topMargin

  doc.setFontStyle('bold')
  doc.text(left, top, 'Phone: ')
  let leftOffset = getTextWidth(doc, 'Phone: ')
  doc.setFontStyle('normal')
  doc.text(left + leftOffset, top, '(07) 3803 1788')
  doc.setFontStyle('bold')
  doc.text(left, top + lineHeight, 'Mobile: ')
  leftOffset = getTextWidth(doc, 'Mobile: ')
  doc.setFontStyle('normal')
  doc.text(left + leftOffset, top + lineHeight, '0411 796 281')
  doc.setFontStyle('bold')
  doc.text(left, top + 2 * lineHeight, 'Email: ')
  leftOffset = getTextWidth(doc, 'Email: ')
  doc.setFontStyle('normal')
  doc.textWithLink(
    'admin@play-force.com.au',
    left + leftOffset,
    top + 2 * lineHeight,
    { mailto: 'admin@play-force.com.au' },
  )
  doc.setFontStyle('bold')
  doc.text(left, top + 3 * lineHeight, 'Web: ')
  leftOffset = getTextWidth(doc, 'Web: ')
  doc.setFontStyle('normal')
  doc.textWithLink(
    'www.play-force.com.au',
    left + leftOffset,
    top + 3 * lineHeight,
    { url: 'http://www.play-force.com.au' },
  )
}
