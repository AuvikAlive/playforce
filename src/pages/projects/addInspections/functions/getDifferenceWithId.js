import { differenceWith } from 'lodash'

export const getDifferenceWithId = (arr, oth) =>
  differenceWith(arr, oth, (arrVal, othVal) => arrVal.id === othVal.id)
