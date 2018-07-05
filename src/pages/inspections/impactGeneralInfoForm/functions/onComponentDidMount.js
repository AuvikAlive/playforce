import { loadInitialData } from '../../../../functions/'

export const onComponentDidMount = component => {
  const { initialData } = component.props

  loadInitialData(component, initialData)
}
