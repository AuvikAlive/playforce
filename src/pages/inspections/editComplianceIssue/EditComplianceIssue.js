import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import ComplianceIssueForm from '../complianceIssueForm/'
import { submit, setNav } from './functions/'

export class EditComplianceIssue extends Component {
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
        setNav={setNav(this)}
      />
    )
  }
}

EditComplianceIssue.contextTypes = contextTypesTitleLeftRightNav
