import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import MaintenanceIssueForm from '../maintenanceIssueForm/'

export class AddMaintenanceIssue extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add Maintenance Issue')

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

  showActionGoBack = maintenanceIssueId => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Issue published!' })
    history.replace(`edit/${maintenanceIssueId}`)
  }

  submit = async maintenanceIssue => {
    const { addMaintenanceIssue, userId, inspectionId } = this.props

    const maintenanceIssueId = await addMaintenanceIssue(
      userId,
      inspectionId,
      maintenanceIssue
    )

    return maintenanceIssueId
  }

  render() {
    return (
      <MaintenanceIssueForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddMaintenanceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
