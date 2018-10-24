import { isEmpty } from 'lodash'
import { loadInitialData } from './loadInitialData'

export const onComponentDidMount = async component => {
  const {
    initialData,
    sitesLoaded,
    fetchSitesRealTime,
    standardsLoaded,
    fetchStandardsRealTime,
    clientsLoaded,
    fetchClientsRealTime,
    userId,
  } = component.props

  const { addUnsubscriber } = component.context

  !isEmpty(initialData) && loadInitialData(component, initialData)
  !sitesLoaded && addUnsubscriber(await fetchSitesRealTime(userId))
  !standardsLoaded && addUnsubscriber(await fetchStandardsRealTime(userId))
  !clientsLoaded && addUnsubscriber(await fetchClientsRealTime(userId))
}
