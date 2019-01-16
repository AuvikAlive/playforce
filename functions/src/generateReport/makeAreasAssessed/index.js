import { makeTitle } from './makeTitle'
import { makeNote } from './makeNote'
import { makeSurrounds } from './makeSurrounds'
import { makeSurfacing } from './makeSurfacing'
import { makeEquipment } from './makeEquipment'
import { makeFalling } from './makeFalling'
import { makeEntrapment } from './makeEntrapment'
import { makeParts } from './makeParts'

export const makeAreasAssessed = () => [
  makeTitle(),
  makeNote(),
  makeSurrounds(),
  makeSurfacing(),
  makeEquipment(),
  makeFalling(),
  makeEntrapment(),
  makeParts(),
]
