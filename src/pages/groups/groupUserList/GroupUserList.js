import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import DeleteIcon from 'material-ui-icons/Delete'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import SearchIcon from 'material-ui-icons/Search'
import SearchBar from '../../../components/searchBar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledGroupUserList } from './StyledGroupUserList'

export class GroupUserList extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  async componentDidMount() {
    const { addUnsubscriber, setSearchComponent } = this.context
    const { id, fetchGroupUsersRealTime } = this.props

    this.setNav()

    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    addUnsubscriber(await fetchGroupUsersRealTime(id))
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
    const { id, history, openSearchBar } = this.props

    setNavTitle(`Manage ${id}`)

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
          aria-label="delete from group"
          onClick={this.deleteMembers}
        >
          <DeleteIcon />
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

  handleButtonPress = user => {
    const { selectedItems } = this.state

    this.buttonPressTimer = setTimeout(() => {
      if (selectedItems.find(item => item.id === user.id)) {
        this.setSelectedItems(selectedItems.filter(item => item.id !== user.id))
      } else {
        this.setSelectedItems([...selectedItems, user])
      }
    }, 300)
  }

  handleButtonRelease = user => {
    const { selectedItems } = this.state

    clearTimeout(this.buttonPressTimer)

    if (selectedItems.length === 0) {
      this.setSelectMode(false)
    } else {
      this.setSelectMode(true, selectedItems.length)
    }
  }

  deleteMembers = async () => {
    const { selectedItems } = this.state
    const { deleteMembers, id } = this.props

    try {
      await deleteMembers(id, selectedItems)
      this.setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { groupUsersLoaded, groupUsers, match } = this.props
    const { selectedItems } = this.state
    const groupUsersAdded = groupUsers.length > 0

    return groupUsersLoaded ? (
      <StyledGroupUserList className="StyledGroupUserList">
        <StyledNavLink to={match.url + '/addMember'} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={groupUsersAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {groupUsersAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {groupUsers.map(user => {
                const itemSelected = selectedItems.find(
                  item => item.id === user.id
                )

                return (
                  <ListItem
                    divider
                    button
                    key={user.id}
                    selected={itemSelected ? true : false}
                    className={`list-item ${itemSelected && 'selected'}`}
                    onTouchStart={() => this.handleButtonPress(user)}
                    onTouchEnd={() => this.handleButtonRelease(user)}
                    onMouseDown={() => this.handleButtonPress(user)}
                    onMouseUp={() => this.handleButtonRelease(user)}
                  >
                    <ListItemText primary={user.displayName} />
                  </ListItem>
                )
              })}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding a member to get started!
          </Typography>
        )}
      </StyledGroupUserList>
    ) : (
      <LinearProgress />
    )
  }
}

GroupUserList.contextTypes = {
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
