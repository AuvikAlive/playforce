import { setCode } from './setCode'

export const onComponentDidMount = component => {
  const { setNavTitle } = component.context

  setNavTitle('Confirm Password Reset')

  setCode(this)
}
