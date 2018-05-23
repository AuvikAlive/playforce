import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { StyledSidenavBackground } from './StyledSidenavBackround'

export class SidenavBackground extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Select Sidenav Background')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    return (
      <StyledSidenavBackground className="StyledSidenavBackground">
        Sidenav Background
      </StyledSidenavBackground>
    )
  }
}

SidenavBackground.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
