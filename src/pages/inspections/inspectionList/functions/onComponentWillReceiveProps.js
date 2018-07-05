import { setRightNav } from './setRightNav'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { view } = nextProps

  view !== component.props.view && setRightNav(component, view)
}
