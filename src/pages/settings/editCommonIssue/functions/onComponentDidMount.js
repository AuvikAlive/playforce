import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { deleteCommonIssue } from './deleteCommonIssue'

export const onComponentDidMount = component => {
  const { setRightNavComponent } = component.context

  const {
    openDialog,
    fetchCommonIssue,
    userId,
    commonIssue,
    commonIssueId,
  } = component.props

  const title = 'Edit Issue'

  onComponentDidMountWithTitleLeftNav(component, title)

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete condition rating"
      onClick={() => openDialog(deleteCommonIssue(component))}
    >
      <DeleteIcon />
    </IconButton>
  )

  !commonIssue && fetchCommonIssue(userId, commonIssueId)
}
