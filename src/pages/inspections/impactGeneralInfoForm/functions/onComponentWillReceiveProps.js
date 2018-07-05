import { loadInitialData } from '../../../../functions/'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { initialData } = nextProps

  initialData &&
    initialData !== this.props.initialData &&
    loadInitialData(component, initialData)
}
