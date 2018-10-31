import React, { Component } from 'react'
import { differenceWith } from 'lodash'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { showContentWhenLoaded } from '../../../functions/showContentWhenLoaded'
import { UserListView } from '../UserListView'
import { setSelectedItems } from '../../../functions/setSelectedItems'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  setSelectMode,
} from './functions/'
import { StyledAddMembers } from './StyledAddMembers'

const title = 'Add Members'

export class AddMembers extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onComponentDidMount(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { usersLoaded, membersLoaded, users, members } = this.props
    const { selectedItems, selectMode } = this.state
    const usersToShow = differenceWith(users, members, (a, b) => a.id === b.id)
    const isLoaded = usersLoaded && membersLoaded

    return showContentWhenLoaded(
      isLoaded,
      <StyledAddMembers className="StyledAddMembers">
        <SelectableList
          users={usersToShow}
          ListView={UserListView}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={setSelectedItems(this)}
          setSelectMode={setSelectMode(this, title)}
        />
      </StyledAddMembers>
    )
  }
}

AddMembers.contextTypes = contextTypes
