import { onComponentDidMountWithTitleLeftNav } from '../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const {
    commonIssuesLoaded,
    fetchCommonIssuesRealTime,
    userId,
  } = component.props

  const title = 'Common Issues'

  onComponentDidMountWithTitleLeftNav(component, title)

  !commonIssuesLoaded &&
    addUnsubscriber(await fetchCommonIssuesRealTime(userId))
}
