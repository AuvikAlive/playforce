import jsPDF from 'jspdf'
import { setLogo } from './setLogo'
import { setAddress } from './setAddress'
import { setNumberAndDigitalAddress } from './setNumberAndDigitalAddress'
import { setTitle } from './setTitle'
import { setCoverImage } from './setCoverImage'
import { setCover } from './setCover'

const fontSize = 12
const leftMargin = 76
const topMargin = 30
const lineHeight = 14

export const generatePdf = ({ cover }) => {
  let doc = new jsPDF('p', 'pt', [1080, 763])

  doc.setFontSize(fontSize)

  setLogo({ doc, leftMargin, topMargin })
  setAddress({ doc, topMargin, lineHeight, fontSize })
  setNumberAndDigitalAddress({ doc, topMargin, lineHeight, fontSize })
  setTitle({ doc, leftMargin, fontSize })
  setCoverImage({ doc, imgData: cover.image })
  setCover({
    doc,
    leftMargin,
    fontSize,
    lineHeight,
    cover,
  })

  return doc
}
