import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { differenceWith, isEqual } from 'lodash'
import SearchBar from '../../../components/searchBar'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { UserListView } from '../UserListView'
import { StyledAddMembers } from './StyledAddMembers'

export class AddMembers extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  async componentDidMount() {
    const { addUnsubscriber, setSearchComponent } = this.context
    const {
      usersLoaded,
      fetchUsersRealTime,
      membersLoaded,
      fetchMembersRealTime,
      id,
    } = this.props

    this.setNav()

    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    !usersLoaded && addUnsubscriber(await fetchUsersRealTime())
    !membersLoaded && addUnsubscriber(await fetchMembersRealTime(id))
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
  }

  setNav = () => {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openSearchBar } = this.props

    setNavTitle(`Add Member`)

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>
    )
  }

  setSelectedItems = selectedItems => this.setState({ selectedItems })

  setSelectMode = (selectMode, selectedItemsLength) => {
    const {
      setNavColor,
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
      setSearchOnBottom,
      setSearchOnTop,
    } = this.context

    if (selectMode) {
      const { searchBarOpen, searchResults } = this.props
      const searchMode =
        searchBarOpen && searchResults && searchResults.length > 0

      setNavColor('default')
      setNavTitle(selectedItemsLength)

      setLeftNavComponent(
        <IconButton
          color="inherit"
          aria-label="back"
          onClick={() => this.setSelectMode(false)}
        >
          <ArrowBackIcon />
        </IconButton>
      )

      setRightNavComponent(
        <IconButton
          color="inherit"
          aria-label="add to group"
          onClick={this.addMembers}
        >
          <AddIcon />
        </IconButton>
      )

      searchMode && setSearchOnBottom()
    } else {
      setSearchOnTop()
      setNavColor('primary')

      this.setNav()
      this.setSelectedItems([])
    }

    this.setState({ selectMode })
  }

  addMembers = async () => {
    const { selectedItems } = this.state
    const { addMembers, id } = this.props

    try {
      await addMembers(id, selectedItems)
      this.setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { usersLoaded, membersLoaded, users, members } = this.props
    const { selectedItems, selectMode } = this.state
    const usersToShow = differenceWith(users, members, isEqual)

    return usersLoaded && membersLoaded ? (
      <StyledAddMembers className="StyledAddMembers">
        <SelectableList
          users={usersToShow}
          ListView={UserListView}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={this.setSelectedItems}
          setSelectMode={this.setSelectMode}
          handleClick={this.handleSelectClick}
        />
      </StyledAddMembers>
    ) : (
      <LinearProgress />
    )
  }
}

AddMembers.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
  setSearchComponent: PropTypes.func,
  setNavColor: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
}
