import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { setLogo } from './setLogo'
import { setAddress } from './setAddress'
import { setNumberAndDigitalAddress } from './setNumberAndDigitalAddress'
import { setTitle } from './setTitle'
import { setCoverImage } from './setCoverImage'
import { setCover } from './setCover'
import { setStandard } from './setStandard'
import { setAuditSummary } from './setAuditSummary'
import { setConditionRatingInfo } from './setConditionRatingInfo'

const fontSize = 12
const headlineSize = 1.9 * fontSize
const marginLeftRight = 76
const topMargin = 30
const topMrginWithLogoOffset = 118
const lineHeight = 14

export const generatePdf = ({ cover, auditSummary }) => {
  let doc = new jsPDF('p', 'pt', [1080, 763])

  doc.setFontSize(fontSize)

  // setLogo({ doc, marginLeftRight, topMargin })
  // setAddress({ doc, topMargin, lineHeight, fontSize })
  // setNumberAndDigitalAddress({ doc, topMargin, lineHeight, fontSize })
  // setTitle({ doc, headlineSize })
  // setCoverImage({ doc, imgData: cover.image })
  // setCover({
  //   doc,
  //   marginLeftRight,
  //   fontSize,
  //   lineHeight,
  //   cover,
  // })
  // setStandard({
  //   doc,
  //   marginLeftRight,
  //   fontSize,
  //   lineHeight,
  //   standards: cover.appliedStandards,
  // })
  // doc.addPage()
  // setAuditSummary({
  //   doc,
  //   marginLeftRight,
  //   topMrginWithLogoOffset,
  //   fontSize,
  //   headlineSize,
  //   lineHeight,
  //   auditSummary,
  //   cover,
  // })
  // doc.addPage()
  setConditionRatingInfo({
    doc,
    marginLeftRight,
    topMrginWithLogoOffset,
    fontSize,
    headlineSize,
    lineHeight,
  })

  return doc
}
