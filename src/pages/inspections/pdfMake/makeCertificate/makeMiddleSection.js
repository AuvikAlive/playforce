import { verticalMargin } from '../constants'
import { makeSiteLocationRow } from './makeSiteLocationRow'
import { makeClientRow } from './makeClientRow'
import { makeItemsRow } from './makeItemsRow'
import { makeStandardsRow } from './makeStandardsRow'
import { makeInspectionRow } from './makeInspectionRow'
import { makeRevDateRow } from './makeRevDateRow'

export const makeMiddleSection = ({
  pageFontSize,
  lineHeight,
  location,
  client,
  clientAddress,
  conditionRatings,
  appliedStandards,
  inspectionNumber,
  customInspectionNumber,
}) => {
  const firstColumnWidth = 150
  const marginBottom = verticalMargin * 2

  return [
    makeSiteLocationRow({
      pageFontSize,
      lineHeight,
      firstColumnWidth,
      marginBottom,
      location,
    }),
    makeClientRow({
      pageFontSize,
      lineHeight,
      firstColumnWidth,
      marginBottom,
      client,
      clientAddress,
    }),
    makeItemsRow({
      pageFontSize,
      lineHeight,
      firstColumnWidth,
      marginBottom,
      conditionRatings,
    }),
    makeStandardsRow({
      pageFontSize,
      lineHeight,
      firstColumnWidth,
      marginBottom,
      appliedStandards,
    }),
    makeInspectionRow({
      pageFontSize,
      firstColumnWidth,
      marginBottom,
      inspectionNumber,
      customInspectionNumber,
    }),
    makeRevDateRow(pageFontSize, firstColumnWidth, marginBottom),
  ]
}
