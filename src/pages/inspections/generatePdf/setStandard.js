import { getTextCenterOffset } from './getTextCenterOffset'

export const setStandard = ({
  doc,
  leftMargin,
  fontSize,
  lineHeight,
  standards,
}) => {
  const top = 1016

  setTitle({ doc, top, fontSize })
  setStandards({ doc, top, lineHeight, standards })
}

const setTitle = ({ doc, top, fontSize }) => {
  const text =
    'This playground has been assessed against the requirements of the following Standards:'
  const left = getTextCenterOffset({ doc, text })

  doc.setFontStyle('bold')
  doc.text(left, top, text)
}

const setStandards = ({ doc, top, lineHeight, standards }) => {
  const text = standards.join(' ')
  const left = getTextCenterOffset({ doc, text })

  doc.setFontStyle('normal')
  doc.text(left, top + lineHeight, text)
}
