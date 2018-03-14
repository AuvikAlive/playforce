import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { StyledAddMaintenanceIssue } from './StyledAddMaintenanceIssue'

export class AddMaintenanceIssue extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context

    setNavTitle('Add Maintenance Issue')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="go back"
        onClick={this.addMaintenanceIssue}
      >
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  addMaintenanceIssue = () => {
    const { history } = this.props

    history.goBack()
  }

  render() {
    return (
      <StyledAddMaintenanceIssue>
        Add Maintenance Issue
      </StyledAddMaintenanceIssue>
    )
  }
}

AddMaintenanceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
