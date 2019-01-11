import { fontSize } from '../constants'
import { makeMiddleSectionFirstRow } from './makeMiddleSectionFirstRow'
import { makeMiddleSectionSecondRow } from './makeMiddleSectionSecondRow'
import { makeMiddleSectionThirdRow } from './makeMiddleSectionThirdRow'
import { makeStandardItems } from './makeStandardItems'

const sectionFontSize = fontSize + 2
const firstColumnWidth = 150

export const makeMiddleSection = ({
  location,
  client,
  inspectionDate,
  displayName,
  appliedStandards,
}) => {
  const { name, address } = location

  return [
    makeMiddleSectionFirstRow({
      sectionFontSize,
      firstColumnWidth,
      name,
      location: address,
    }),
    makeMiddleSectionSecondRow({
      sectionFontSize,
      firstColumnWidth,
      client,
    }),
    makeMiddleSectionThirdRow({
      sectionFontSize,
      firstColumnWidth,
      inspectionDate,
      displayName,
    }),
    makeStandardItems(appliedStandards),
  ]
}
