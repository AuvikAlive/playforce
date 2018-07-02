import React from 'react'
import SearchBar from '../../../../components/searchBar'
import { setNav } from './setNav'

export const onComponentDidMount = async component => {
  const { addUnsubscriber, setSearchComponent } = component.context
  const { id, fetchMembersRealTime } = component.props

  setNav(component)
  setSearchComponent(<SearchBar onSearch={component.onSearch} />)
  addUnsubscriber(await fetchMembersRealTime(id))
}
