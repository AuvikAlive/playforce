import { lightGray } from '../constants'

import { makeIssue } from './makeIssue'
import { makeFinding } from './makeFinding'
import { makeStandardsClause } from './makeStandardsClause'
import { makeRiskAssessment } from './makeRiskAssessment/'
import { makeComments } from './makeComments'
import { makeRecommendations } from './makeRecommendations'

export const makeTable = ({
  columnGap,
  imageWidth,
  index,
  complianceIssue,
}) => {
  const {
    images,
    finding,
    equipment,
    standardsClause,
    probability,
    severity,
    comments,
    recommendations,
  } = complianceIssue

  return {
    unbreakable: true,
    marginBottom: images.length > 1 ? columnGap : columnGap * 2,
    layout: {
      hLineWidth: (i, node) => {
        return i === 0 || i === node.table.body.length ? 0 : 1
      },
      vLineWidth: (i, node) => {
        return 0
      },
      hLineColor: (i, node) => {
        return lightGray
      },
      vLineColor: (i, node) => {
        return lightGray
      },
      paddingLeft: (i, node) => {
        return 0
      },
      paddingRight: (i, node) => {
        return i === 3 ? 0 : 4
      },
      paddingTop: (i, node) => {
        return i === 0 || i === 3 ? 0 : 8
      },
      paddingBottom: (i, node) => {
        return i === 3 || i + 1 === node.table.body.length ? 0 : 8
      },
    },
    table: {
      widths: ['auto', '*', '*', '*'],
      body: [
        makeIssue({
          image: images[0].image,
          imageWidth,
          index,
          equipment,
        }),
        makeFinding(finding),
        makeStandardsClause(standardsClause),
        makeRiskAssessment(probability, severity),
        makeComments(comments),
        makeRecommendations(recommendations),
      ],
    },
  }
}
