import { makeSubtitle } from '../makeSubtitle'

export const makeHeader = ({ location, surfaceType, material }) =>
  makeSubtitle(`${location} - ${surfaceType} | ${material}`)
