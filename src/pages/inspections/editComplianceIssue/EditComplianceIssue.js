import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  onComponentWillUnmountWithTitleLeftRightNav,
} from '../../../functions/'
import ComplianceIssueForm from '../complianceIssueForm/'
import { deleteIssue, submit } from './functions/'

export class EditComplianceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftRightNavDelete(
      this,
      'Edit Issue',
      deleteIssue
    )
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { complianceIssue } = this.props

    return (
      <ComplianceIssueForm
        buttonText="save"
        initialData={complianceIssue}
        onSubmit={submit(this)}
      />
    )
  }
}

EditComplianceIssue.contextTypes = contextTypesTitleLeftRightNav
