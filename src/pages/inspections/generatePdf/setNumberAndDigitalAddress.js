export const setNumberAndDigitalAddress = ({
  doc,
  topMargin,
  lineHeight,
  fontSize,
}) => {
  const left = 510
  const top = topMargin

  doc.setFontStyle('bold')
  doc.text(left, top, 'Phone:')
  doc.setFontStyle('normal')
  doc.text(left + 4 * fontSize, top, '(07) 3803 1788')
  doc.setFontStyle('bold')
  doc.text(left, top + lineHeight, 'Mobile:')
  doc.setFontStyle('normal')
  doc.text(left + 4 * fontSize, top + lineHeight, '0411 796 281')
  doc.setFontStyle('bold')
  doc.text(left, top + 2 * lineHeight, 'Email:')
  doc.setFontStyle('normal')
  doc.textWithLink(
    'admin@play-force.com.au',
    left + 3.5 * fontSize,
    top + 2 * lineHeight,
    { mailto: 'admin@play-force.com.au' },
  )
  doc.setFontStyle('bold')
  doc.text(left, top + 3 * lineHeight, 'Web:')
  doc.setFontStyle('normal')
  doc.textWithLink(
    'www.play-force.com.au',
    left + 3 * fontSize,
    top + 3 * lineHeight,
    { url: 'http://www.play-force.com.au' },
  )
}
