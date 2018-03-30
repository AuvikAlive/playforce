import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import MaintenanceIssueForm from '../maintenanceIssueForm/'

export class EditMaintenanceIssue extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openModal } = this.props

    setNavTitle('Edit Maintenance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>,
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
