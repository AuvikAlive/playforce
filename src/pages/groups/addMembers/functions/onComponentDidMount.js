import React from 'react'
import SearchBar from '../../../../components/searchBar'
import { setNav } from './setNav'

export const onComponentDidMount = async (component, title) => {
  const { addUnsubscriber, setSearchComponent } = component.context
  const {
    usersLoaded,
    fetchUsersRealTime,
    membersLoaded,
    fetchMembersRealTime,
    id,
  } = component.props

  setNav(component, title)

  setSearchComponent(<SearchBar onSearch={component.onSearch} />)

  !usersLoaded && addUnsubscriber(await fetchUsersRealTime())
  !membersLoaded && addUnsubscriber(await fetchMembersRealTime(id))
}
