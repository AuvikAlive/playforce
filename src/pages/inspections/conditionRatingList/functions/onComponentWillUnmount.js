import { onComponentWillUnmountWithTitleLeftNav } from '../../../../functions/'

export const onComponentWillUnmount = component => {
  component.context.enableNavBarShadow()
  onComponentWillUnmountWithTitleLeftNav(component)
}
