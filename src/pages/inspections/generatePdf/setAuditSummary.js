export const setAuditSummary = ({
  doc,
  marginLeftRight,
  topMrginWithLogoOffset,
  fontSize,
  headlineSize,
  lineHeight,
  auditSummary,
  cover,
}) => {
  let top = topMrginWithLogoOffset
  const { summary, signature, displayName, title, company } = auditSummary

  doc.setFontStyle('bold')
  doc.setFontSize(headlineSize)
  doc.text(marginLeftRight, top, 'AUDIT SUMMARY')
  doc.setFontStyle('normal')
  doc.setFontSize(fontSize)
  const splitSummary = doc.splitTextToSize(
    summary,
    doc.internal.pageSize.width - 2 * marginLeftRight,
  )
  top = top + 2 * lineHeight
  doc.text(marginLeftRight, top, splitSummary)
  const signatureHeight = 86
  top = top + lineHeight + splitSummary.length * lineHeight
  doc.addImage(signature, 'PNG', marginLeftRight, top, 150, signatureHeight)
  top = top + lineHeight + signatureHeight
  doc.setFontStyle('bold')
  doc.text(marginLeftRight, top, displayName)
  doc.setFontStyle('normal')
  top = top + lineHeight
  doc.text(marginLeftRight, top, title)
  top = top + lineHeight
  doc.text(marginLeftRight, top, company)
}
