import { makeSiteLocationRow } from './makeSiteLocationRow'
import { makeClientRow } from './makeClientRow'
import { makeItemsRow } from './makeItemsRow'
import { makeStandardsRow } from './makeStandardsRow'
import { makeInspectionRow } from './makeInspectionRow'

export const makeMiddleSection = ({
  pageFontSize,
  location,
  client,
  conditionRatings,
  appliedStandards,
  inspectionNumber,
}) => {
  const firstColumnWidth = 150

  return [
    makeSiteLocationRow(pageFontSize, firstColumnWidth, location),
    makeClientRow(pageFontSize, firstColumnWidth, client),
    makeItemsRow(pageFontSize, firstColumnWidth, conditionRatings),
    makeStandardsRow(pageFontSize, firstColumnWidth, appliedStandards),
    makeInspectionRow(pageFontSize, firstColumnWidth, inspectionNumber),
  ]
}
