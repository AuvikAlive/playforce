import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteConditionRating } from './deleteConditionRating'

export const onComponentDidMount = component => {
  const {
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
  } = component.context
  const { history, openDialog } = component.props

  setNavTitle('Edit Rating')

  setLeftNavComponent(
    <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
      <ArrowBackIcon />
    </IconButton>
  )

  setRightNavComponent(
    <IconButton
      color="inherit"
      aria-label="delete condition rating"
      onClick={() => openDialog(deleteConditionRating(component))}
    >
      <DeleteIcon />
    </IconButton>
  )
}
