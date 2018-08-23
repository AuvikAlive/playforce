import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGoBack,
} from '../../../functions/'
import ComplianceIssueForm from '../complianceIssueForm/'

export class AddComplianceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Compliance Issue')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addComplianceIssue } = this.props

    return (
      <ComplianceIssueForm
        afterSubmit={showActionGoBack(this, 'Issue published!')}
        onSubmit={data => addComplianceIssue(data)}
      />
    )
  }
}

AddComplianceIssue.contextTypes = contextTypesTitleLeftNav
