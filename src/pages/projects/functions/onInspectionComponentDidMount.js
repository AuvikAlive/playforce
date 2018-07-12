import React from 'react'
import { setInspectionNav } from './setInspectionNav'
import { onInspectionSearch } from './onInspectionSearch'
import SearchBar from '../../../components/searchBar/'

export const onInspectionComponentDidMount = async (component, title) => {
  const { addUnsubscriber, setSearchComponent } = component.context
  const {
    inspectionsLoaded,
    fetchInspectionsRealTime,
    fetchProjectMembersRealTime,
    userId,
    id,
  } = component.props

  setInspectionNav(component, title)
  setSearchComponent(<SearchBar onSearch={onInspectionSearch(component)} />)

  !inspectionsLoaded && addUnsubscriber(await fetchInspectionsRealTime(userId))
  addUnsubscriber(await fetchProjectMembersRealTime(userId, id))
}
