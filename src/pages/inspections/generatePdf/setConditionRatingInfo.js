export const setConditionRatingInfo = ({
  doc,
  marginLeftRight,
  topMrginWithLogoOffset,
  fontSize,
  headlineSize,
  lineHeight,
}) => {
  let top = topMrginWithLogoOffset

  doc.setFontStyle('bold')
  doc.setFontSize(headlineSize)
  doc.text(marginLeftRight, top, 'CONDITION RATING & RISK ASSESSMENT')
  doc.setFontStyle('normal')
  doc.setFontSize(fontSize)
  const splitForeword = doc.splitTextToSize(
    '"Play provision should aim at managing the balance between the need to offer risk and the need to keep children safe from serious harm… In play provision exposure to some degree of risk may be of benefit because it satisfies a basic human need and gives children the chance to learn about risk and consequences in a controlled environment." - Foreword to AS 4685.1–2014',
    doc.internal.pageSize.width - 2 * marginLeftRight,
  )
  top = top + 2 * lineHeight
  doc.text(marginLeftRight, top, splitForeword)
  const splitDescription = doc.splitTextToSize(
    'A Risk/Benefit assessment takes into account the benefits of an activity or feature in the playground, as well as the associated risks, weighing with equal consideration the duty to protect children from avoidable serious harm and the duty to provide them with stimulating, adventurous play opportunities.',
    doc.internal.pageSize.width - 2 * marginLeftRight,
  )
  top = top + lineHeight + splitForeword.length * lineHeight
  doc.text(marginLeftRight, top, splitDescription)
  doc.setFontStyle('bold')
  doc.setFontSize(headlineSize)
  top = top + 2 * lineHeight + splitDescription.length * lineHeight
  doc.text(marginLeftRight, top, 'RISK ASSESSMENT MATRIX')
  top = top + 2 * lineHeight
  setAssessmentMatrix({ doc, top, marginLeftRight })
}

const setAssessmentMatrix = ({ doc, top, marginLeftRight }) => {}
