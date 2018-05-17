import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import ComplianceIssueForm from '../complianceIssueForm/'

export class EditComplianceIssue extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Edit Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
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

  setRightNav = () => {
    const { setRightNavComponent } = this.context
    const { openDialog } = this.props

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openDialog(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  submit = async updatedValue => {
    const {
      updateComplianceIssue,
      userId,
      inspectionId,
      complianceIssueId,
      setFeedback,
    } = this.props

    await updateComplianceIssue(
      userId,
      inspectionId,
      complianceIssueId,
      updatedValue
    )
    setFeedback({ success: 'Issue updated!' })
  }

  showActionGoBack = () => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Issue deleted!' })
    history.goBack()
  }

  delete = async () => {
    const {
      deleteComplianceIssue,
      userId,
      inspectionId,
      complianceIssueId,
      complianceIssue,
    } = this.props

    await deleteComplianceIssue(
      userId,
      inspectionId,
      complianceIssueId,
      complianceIssue.images
    )
    this.showActionGoBack()
  }

  render() {
    const { complianceIssue } = this.props

    return (
      <ComplianceIssueForm
        buttonText="save"
        initialData={complianceIssue}
        onSubmit={this.submit}
        setRightNav={this.setRightNav}
        removeRightNav={this.context.removeRightNavComponent}
      />
    )
  }
}

EditComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
