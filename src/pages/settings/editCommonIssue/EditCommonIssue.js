import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import CommonIssueForm from '../commonIssueForm/'

export class EditCommonIssue extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const {
      history,
      openModal,
      fetchCommonIssue,
      userId,
      commonIssue,
      commonIssueId,
    } = this.props

    setNavTitle('Edit Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )

    !commonIssue && fetchCommonIssue(userId, commonIssueId)
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
  }

  onSubmit = commonIssue => {
    const { saveCommonIssue, userId, commonIssueId } = this.props
    return saveCommonIssue(userId, commonIssue, commonIssueId)
  }

  delete = async () => {
    const { deleteCommonIssue, userId, commonIssueId, history } = this.props

    await deleteCommonIssue(userId, commonIssueId)
    history.goBack()
  }

  render() {
    const { commonIssue } = this.props

    return commonIssue ? (
      <CommonIssueForm initialData={commonIssue} onSubmit={this.onSubmit} />
    ) : (
      <LinearProgress />
    )
  }
}

EditCommonIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
