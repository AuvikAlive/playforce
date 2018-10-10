import { onComponentWillUnmountWithTitleLeftNav } from '../../../../functions/'

export const onComponentWillUnmount = component => {
  component.context.removeBottomNavComponent()
  onComponentWillUnmountWithTitleLeftNav(component)
}
