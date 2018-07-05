import { loadInitialData } from './loadInitialData'

export const onComponentWillReceivePropsLoadData = (component, nextProps) => {
  const { initialData } = nextProps

  initialData &&
    initialData !== this.props.initialData &&
    loadInitialData(component, initialData)
}
