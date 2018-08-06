import { makeSiteLocationRow } from './makeSiteLocationRow'
import { makeClientRow } from './makeClientRow'
import { makeItemsRow } from './makeItemsRow'
import { makeStandardsRow } from './makeStandardsRow'
import { makeInspectionRow } from './makeInspectionRow'

export const makeMiddleSection = ({
  pageFontSize,
  lineHeight,
  location,
  client,
  conditionRatings,
  appliedStandards,
  inspectionNumber,
  customInspectionNumber,
}) => {
  const firstColumnWidth = 150

  return [
    makeSiteLocationRow(pageFontSize, lineHeight, firstColumnWidth, location),
    makeClientRow(pageFontSize, firstColumnWidth, client),
    makeItemsRow(pageFontSize, lineHeight, firstColumnWidth, conditionRatings),
    makeStandardsRow(
      pageFontSize,
      lineHeight,
      firstColumnWidth,
      appliedStandards
    ),
    makeInspectionRow(
      pageFontSize,
      firstColumnWidth,
      inspectionNumber,
      customInspectionNumber
    ),
  ]
}
