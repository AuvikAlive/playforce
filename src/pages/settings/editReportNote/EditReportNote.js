import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  onComponentWillUnmountWithTitleLeftRightNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { ReportNoteForm } from '../reportNoteForm/ReportNoteForm'
import { deleteItem, submit } from './functions/'

export class EditReportNote extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftRightNavDelete(
      this,
      'Edit Report Note',
      deleteItem
    )
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { reportNote } = this.props

    return showContentWhenLoaded(
      reportNote,
      <ReportNoteForm
        initialData={reportNote}
        buttonText="Update"
        onSubmit={submit(this)}
      />
    )
  }
}

EditReportNote.contextTypes = contextTypesTitleLeftRightNav
