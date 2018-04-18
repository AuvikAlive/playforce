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

    setNavTitle('Edit Compliance Issue')

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
    const { openModal } = this.props

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  onSubmit = updatedValue => {
    const {
      editComplianceIssue,
      complianceIssueIndex,
      complianceIssue,
      history,
    } = this.props

    if (complianceIssue.id) {
      updatedValue.id = complianceIssue.id
    }

    editComplianceIssue({
      issueIndex: complianceIssueIndex,
      updatedValue,
    })
    history.goBack()
  }

  delete = () => {
    const { deleteComplianceIssue, complianceIssueIndex, history } = this.props

    deleteComplianceIssue(complianceIssueIndex)
    history.goBack()
  }

  render() {
    const { complianceIssue } = this.props

    return (
      <ComplianceIssueForm
        initialData={complianceIssue}
        onSubmit={this.onSubmit}
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
