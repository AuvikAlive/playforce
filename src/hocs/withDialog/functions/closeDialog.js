import { state } from '../state'

export const closeDialog = component => () => {
  component.setState(state)
}
