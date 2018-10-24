import React from 'react'
import { ImpactTestItems } from '../../impactTestItems/ImpactTestItems'
import { beforeBack } from '../../editInspection/functions/beforeBack'
import { generateImpactTestReport } from './generateImpactTestReport'

export const renderImpactTestItems = ({ props }) => routerProps => {
  const {
    impactTests,
    impactGeneralInfo,
    deleteStandaloneImpactTest,
    userId,
    inspectionId,
    fetchStandards,
  } = props

  const testCompleted =
    impactTests && impactTests.some(({ dropTests }) => dropTests.length > 0)

  return (
    <ImpactTestItems
      deleteImpactTest={() =>
        deleteStandaloneImpactTest(userId, inspectionId, impactTests)
      }
      beforeBack={beforeBack({ props })}
      {...{
        impactGeneralInfo,
        impactTests,
        ...(testCompleted && {
          generateImpactTestReport: generateImpactTestReport(
            impactGeneralInfo,
            impactTests,
            userId,
            fetchStandards
          ),
        }),
      }}
      {...routerProps}
    />
  )
}
