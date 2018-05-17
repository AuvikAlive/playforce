import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import MaintenanceIssueForm from '../maintenanceIssueForm/'

export class EditMaintenanceIssue extends Component {
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
      updateMaintenanceIssue,
      userId,
      inspectionId,
      maintenanceIssueId,
      setFeedback,
    } = this.props

    await updateMaintenanceIssue(
      userId,
      inspectionId,
      maintenanceIssueId,
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
      deleteMaintenanceIssue,
      userId,
      inspectionId,
      maintenanceIssueId,
      maintenanceIssue,
    } = this.props

    await deleteMaintenanceIssue(
      userId,
      inspectionId,
      maintenanceIssueId,
      maintenanceIssue.images
    )
    this.showActionGoBack()
  }

  render() {
    const { maintenanceIssue } = this.props

    return (
      <MaintenanceIssueForm
        buttonText="save"
        initialData={maintenanceIssue}
        onSubmit={this.submit}
        setRightNav={this.setRightNav}
        removeRightNav={this.context.removeRightNavComponent}
      />
    )
  }
}

EditMaintenanceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
