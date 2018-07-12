import { loadInitialData } from '../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    userId,
    operatorsLoaded,
    fetchOperatorsRealTime,
    initialData,
  } = component.props

  !operatorsLoaded && addUnsubscriber(await fetchOperatorsRealTime(userId))

  initialData && loadInitialData(component, initialData)
}
