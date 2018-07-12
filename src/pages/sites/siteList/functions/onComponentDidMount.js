import React from 'react'
import SearchBar from '../../../../components/searchBar'
import { setNav } from './setNav'
import { onSearch } from './onSearch'

export const onComponentDidMount = async component => {
  const { userId, sitesLoaded, fetchSitesRealTime } = component.props
  const { setSearchComponent, addUnsubscriber } = component.context

  setNav(component)
  setSearchComponent(<SearchBar onSearch={onSearch(component)} />)

  !sitesLoaded && addUnsubscriber(await fetchSitesRealTime(userId))
}
