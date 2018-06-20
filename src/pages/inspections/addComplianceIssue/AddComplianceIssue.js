import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ComplianceIssueForm from '../complianceIssueForm/'

export class AddComplianceIssue extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add Compliance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  showActionGoBack = complianceIssueId => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Issue published!' })
    history.goBack()
    // history.replace(`edit/${complianceIssueId}`)
  }

  submit = async complianceIssue => {
    const { addComplianceIssue, userId, inspectionId } = this.props

    const complianceIssueId = await addComplianceIssue(
      userId,
      inspectionId,
      complianceIssue
    )
    return complianceIssueId
  }

  render() {
    return (
      <ComplianceIssueForm
        afterSubmit={this.showActionGoBack}
        onSubmit={this.submit}
      />
    )
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
