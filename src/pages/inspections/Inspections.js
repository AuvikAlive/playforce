import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import { StyledInspections } from './StyledInspections'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'

export class Inspections extends Component {
  componentDidMount() {
    const { setRightNavComponent, openSearchBar } = this.props

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeRightNavComponent, closeSearchBar } = this.props

    removeRightNavComponent()
    closeSearchBar()
  }

  render() {
    return (
      <StyledInspections>
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
