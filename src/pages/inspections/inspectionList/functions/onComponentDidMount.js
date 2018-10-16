import React from 'react'
import SearchBar from '../../../../components/searchBar'
import { setNav } from './setNav'
import { onSearch } from './onSearch'

export const onComponentDidMount = async component => {
  const { props, context } = component

  const {
    standardsLoaded,
    fetchStandards,
    userId,
    inspectionsLoaded,
    fetchInspectionsRealTime,
  } = props

  const { setSearchComponent, addUnsubscriber } = context

  setNav(component)
  setSearchComponent(<SearchBar onSearch={onSearch(component)} />)

  !standardsLoaded && fetchStandards(userId)
  !inspectionsLoaded && addUnsubscriber(fetchInspectionsRealTime(userId))
}
