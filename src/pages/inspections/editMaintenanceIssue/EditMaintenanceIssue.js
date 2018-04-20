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
      editMaintenanceIssue,
      maintenanceIssueIndex,
      maintenanceIssue,
      history,
    } = this.props

    if (maintenanceIssue.id) {
      updatedValue.id = maintenanceIssue.id
    }

    editMaintenanceIssue({
      issueIndex: maintenanceIssueIndex,
      updatedValue,
    })
    history.goBack()
  }

  delete = () => {
    const {
      deleteMaintenanceIssue,
      maintenanceIssueIndex,
      history,
    } = this.props

    deleteMaintenanceIssue(maintenanceIssueIndex)
    history.goBack()
  }

  render() {
    const { maintenanceIssue } = this.props

    return (
      <MaintenanceIssueForm
        initialData={maintenanceIssue}
        onSubmit={this.onSubmit}
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
