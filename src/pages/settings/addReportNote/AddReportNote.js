import React, { Component } from 'react'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import { ReportNoteForm } from '../reportNoteForm/ReportNoteForm'

export class AddReportNote extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Report Note')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addReportNote, userId } = this.props

    return (
      <ReportNoteForm
        onSubmit={data => addReportNote(userId, data)}
        afterSubmit={showActionGo(this, 'Note added!', 'edit/')}
      />
    )
  }
}

AddReportNote.contextType = NavContext
