import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import ComplianceIssueForm from '../complianceIssueForm/'

export class AddComplianceIssue extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add Compliance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onSubmit = complianceIssue => {
    const { addComplianceIssue, history } = this.props

    addComplianceIssue(complianceIssue)
    history.goBack()
  }

  render() {
    return <ComplianceIssueForm onSubmit={this.onSubmit} />
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
