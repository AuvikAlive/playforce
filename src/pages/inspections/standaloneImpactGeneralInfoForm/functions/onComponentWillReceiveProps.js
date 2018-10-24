import { loadInitialData } from './loadInitialData'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { initialData } = nextProps

  if (initialData && initialData !== component.props.initialData) {
    loadInitialData(component, initialData)
  }
}
