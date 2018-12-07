import React, { Component } from "react"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  onComponentWillUnmountWithTitleLeftRightNav,
} from "../../../functions/"
import MaintenanceIssueForm from "../maintenanceIssueForm/"
import { deleteMaintenanceIssue, submit } from "./functions/"

export class EditMaintenanceIssue extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftRightNavDelete(
      this,
      "Edit Issue",
      deleteMaintenanceIssue
    )
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { maintenanceIssue } = this.props

    return (
      <MaintenanceIssueForm
        buttonText="save"
        initialData={maintenanceIssue}
        onSubmit={submit(this)}
      />
    )
  }
}

EditMaintenanceIssue.contextType = NavContext
