import { loadInitialDataWithImage } from '../../../../functions/'

export const onComponentDidMount = component => {
  const { initialData } = component.props

  initialData && loadInitialDataWithImage(component, initialData)
}
