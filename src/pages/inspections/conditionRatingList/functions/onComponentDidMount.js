import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = component => {
  component.context.disableNavBarShadow()
  onComponentDidMountWithTitleLeftNav(component, 'Condition Ratings')
}
