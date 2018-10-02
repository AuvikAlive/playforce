import { isEmpty } from 'react-redux-firebase'

export const onComponentDidMount = async ({ props, context }) => {
  const { profile, rootLoaded, fetchDatabaseRootRealTime } = props
  const { addUnsubscriber } = context

  !isEmpty(profile) &&
    !rootLoaded &&
    addUnsubscriber(await fetchDatabaseRootRealTime())
}
