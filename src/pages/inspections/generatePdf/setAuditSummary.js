export const setAuditSummary = ({
  doc,
  leftMargin,
  fontSize,
  headlineSize,
  lineHeight,
  auditSummary,
  cover,
}) => {
  let top = 118
  const { summary, signature, displayName, title, company } = auditSummary

  doc.setFontStyle('bold')
  doc.setFontSize(headlineSize)
  doc.text(leftMargin, top, 'AUDIT SUMMARY')
  doc.setFontStyle('normal')
  doc.setFontSize(fontSize)
  const splitSummary = doc.splitTextToSize(
    summary,
    doc.internal.pageSize.width - 2 * leftMargin,
  )
  top = top + 2 * lineHeight
  doc.text(leftMargin, top, splitSummary)
  const signatureHeight = 86
  top = top + lineHeight + splitSummary.length * lineHeight
  doc.addImage(signature, 'PNG', leftMargin, top, 150, signatureHeight)
  top = top + lineHeight + signatureHeight
  doc.setFontStyle('bold')
  doc.text(leftMargin, top, displayName)
  doc.setFontStyle('normal')
  top = top + lineHeight
  doc.text(leftMargin, top, title)
  top = top + lineHeight
  doc.text(leftMargin, top, company)
}
