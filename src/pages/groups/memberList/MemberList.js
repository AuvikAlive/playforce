import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
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

    return showContentWhenLoaded(
      membersLoaded,
      <StyledMemberList className="StyledMemberList">
        <StyledNavLink to={match.url + '/addMember'} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={members.length > 0 ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

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
