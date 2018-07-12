import { contextTypesUnsubscriber } from './contextTypesUnsubscriber'
import { contextTypesTitleLeftNav } from './contextTypesTitleLeftNav'

export const contextTypesTitleLeftNavUnsubscriber = {
  ...contextTypesTitleLeftNav,
  ...contextTypesUnsubscriber,
}
