import { onComponentDidMountWithTitleLeftNav } from '../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const {
    commonIssuesLoaded,
    fetchCommonIssuesRealTime,
    userId,
  } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Common Issues')

  !commonIssuesLoaded &&
    addUnsubscriber(await fetchCommonIssuesRealTime(userId))
}
