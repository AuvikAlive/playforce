import React from 'react'
import SearchBar from '../../../../components/searchBar'
import { setNav } from './setNav'
import { onSearch } from './onSearch'

export const onComponentDidMount = async component => {
  const {
    standardsLoaded,
    fetchStandards,
    userId,
    inspectionsLoaded,
    fetchInspectionsRealTime,
  } = component.props
  const { setSearchComponent, addUnsubscriber } = component.context

  setNav(component)

  setSearchComponent(<SearchBar onSearch={onSearch(component)} />)

  !standardsLoaded && fetchStandards(userId)
  !inspectionsLoaded && addUnsubscriber(await fetchInspectionsRealTime(userId))
}
