import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { StyledInspections } from './StyledInspections'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import SearchBar from '../../components/searchBar'

export class Inspections extends Component {
  componentDidMount() {
    const { openSearchBar } = this.props
    const {
      setNavTitle,
      setRightNavComponent,
      setSearchComponent,
    } = this.context

    setNavTitle('Inspections')

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )

    setSearchComponent(<SearchBar />)
  }

  componentWillUnmount() {
    const { closeSearchBar } = this.props
    const {
      removeNavTitle,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context

    removeNavTitle()
    removeRightNavComponent()
    closeSearchBar()
    removeSearchComponent()
  }

  render() {
    return (
      <StyledInspections className="StyledInspections">
        <Typography variant="title" align="center">
          Try adding an inspection to get started!
        </Typography>
        <Button
          variant="fab"
          color="primary"
          aria-label="add inspection"
          className="add-icon pulse"
        >
          <AddIcon />
        </Button>
      </StyledInspections>
    )
  }
}

Inspections.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
}
