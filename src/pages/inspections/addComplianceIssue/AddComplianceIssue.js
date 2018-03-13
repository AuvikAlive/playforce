import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { StyledAddCompliaceIssue } from './StyledAddComplianceIssue'

export class AddComplianceIssue extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context

    setNavTitle('Add Compliance Issue')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="go back"
        onClick={this.addComplianceIssue}
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

  addComplianceIssue = () => {
    const { history } = this.props

    history.goBack()
  }

  render() {
    return <StyledAddCompliaceIssue />
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
