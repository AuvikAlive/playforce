import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const { userId, operatorsLoaded, fetchOperatorsRealTime } = component.props
  const title = 'Operators'

  onComponentDidMountWithTitleLeftNav(component, title)

  !operatorsLoaded && addUnsubscriber(await fetchOperatorsRealTime(userId))
}
