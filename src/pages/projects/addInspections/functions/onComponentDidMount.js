import React from 'react'
import { setInspectionNav } from '../../functions/setInspectionNav'
import { onInspectionSearch } from '../../functions/onInspectionSearch'
import SearchBar from '../../../../components/searchBar'

export const onComponentDidMount = async component => {
  const { addUnsubscriber, setSearchComponent } = component.context
  const {
    inspectionsLoaded,
    fetchInspectionsRealTime,
    fetchProjectMembersRealTime,
    userId,
    id,
  } = component.props

  setInspectionNav(component, 'Add Inspections')
  setSearchComponent(<SearchBar onSearch={onInspectionSearch(component)} />)

  !inspectionsLoaded && addUnsubscriber(await fetchInspectionsRealTime(userId))
  addUnsubscriber(await fetchProjectMembersRealTime(userId, id))
}
