import React, { Component } from 'react'
import { AddButton } from '../../../components/addButton/AddButton'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { showContentWhenLoaded, setSelectedItems } from '../../../functions/'
import { UserListView } from '../UserListView'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  setSelectMode,
} from './functions/'
import { StyledMemberList } from './StyledMemberList'

export class MemberList extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { membersLoaded, members, match } = this.props
    const { selectedItems, selectMode } = this.state
    const membersAdded = members.length > 0

    return showContentWhenLoaded(
      membersLoaded,
      <StyledMemberList className="StyledMemberList">
        <AddButton to={match.url + '/addMember'} pulse={!membersAdded} />

        <SelectableList
          ListView={UserListView}
          users={members}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={setSelectedItems(this)}
          setSelectMode={setSelectMode(this)}
        />
      </StyledMemberList>
    )
  }
}

MemberList.contextTypes = contextTypes
