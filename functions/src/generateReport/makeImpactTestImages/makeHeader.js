import { makeSubtitle } from '../makeSubtitle'

export const makeHeader = ({ location, type, material }) => {
  return makeSubtitle(`${location} - ${type} | ${material}`)
}
