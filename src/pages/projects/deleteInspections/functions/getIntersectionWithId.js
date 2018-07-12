import { intersectionWith } from 'lodash'

export const getIntersectionWithId = (arr, oth) =>
  intersectionWith(arr, oth, (arrVal, othVal) => arrVal.id === othVal.id)
