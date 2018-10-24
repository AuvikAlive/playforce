import { makeLocation } from './makeLocation'
import { makeClient } from './makeClient'
import { makeDate } from './makeDate'
import { makeWeatherCondition } from './makeWeatherCondition'
import { makeApparatus } from './makeApparatus'
import { makeStandards } from './makeStandards'
import { makeMethod } from './makeMethod'

const firstColumnWidth = 170

export const makeGeneralInfo = (impactGeneralInfo, appliedStandards) => {
  const { location, client, inspectionDate } = impactGeneralInfo

  return [
    location && makeLocation(firstColumnWidth, location),
    client && makeClient(firstColumnWidth, client),
    inspectionDate && makeDate(firstColumnWidth, inspectionDate),
    makeWeatherCondition(firstColumnWidth, impactGeneralInfo),
    makeApparatus(firstColumnWidth, impactGeneralInfo),
    makeStandards(firstColumnWidth, appliedStandards),
    makeMethod(firstColumnWidth),
  ]
}
