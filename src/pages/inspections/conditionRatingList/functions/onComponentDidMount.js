import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { setTabBar } from './setTabBar'

export const onComponentDidMount = component => {
  setTabBar(component)
  onComponentDidMountWithTitleLeftNav(component, 'Condition Ratings')
}
