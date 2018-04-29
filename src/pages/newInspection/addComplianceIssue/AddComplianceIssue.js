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
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  showActionGoBack = async (message, complianceIssueId) => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: message })
    history.replace(`edit/${complianceIssueId}`)
  }

  submit = async complianceIssue => {
    const { addComplianceIssue, userId, inspectionId } = this.props

    const complianceIssueId = await addComplianceIssue(
      userId,
      inspectionId,
      complianceIssue
    )
    this.showActionGoBack('Issue published!', complianceIssueId)
  }

  render() {
    return <ComplianceIssueForm onSubmit={this.submit} />
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
