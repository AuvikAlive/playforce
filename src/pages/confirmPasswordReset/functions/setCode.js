import { parseQuery } from '../../../functions/parseQuery'

export const setCode = component => {
  const { location, history } = component.props
  const code = parseQuery(location.search)['oobCode']
    ? parseQuery(location.search)['oobCode']
    : history.push('/signIn')

  component.setState({ code })
}
