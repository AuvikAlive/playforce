import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGoBack,
} from '../../../functions/'
import MaintenanceIssueForm from '../maintenanceIssueForm/'

export class AddMaintenanceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Maintenance Issue')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addMaintenanceIssue } = this.props

    return (
      <MaintenanceIssueForm
        onSubmit={data => addMaintenanceIssue(data)}
        afterSubmit={showActionGoBack(this, 'Issue published!')}
      />
    )
  }
}

AddMaintenanceIssue.contextTypes = contextTypesTitleLeftNav
