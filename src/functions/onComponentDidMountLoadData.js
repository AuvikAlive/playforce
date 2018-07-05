import { loadInitialData } from './loadInitialData'

export const onComponentDidMountLoadData = component => {
  const { initialData } = component.props

  loadInitialData(component, initialData)
}
