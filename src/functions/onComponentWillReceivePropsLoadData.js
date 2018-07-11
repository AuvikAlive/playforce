import { loadInitialData } from './loadInitialData'

export const onComponentWillReceivePropsLoadData = (component, nextProps) => {
  const { initialData } = nextProps

  initialData &&
    initialData !== component.props.initialData &&
    loadInitialData(component, initialData)
}
