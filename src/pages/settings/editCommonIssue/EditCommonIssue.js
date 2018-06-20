import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
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
      openDialog,
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
        onClick={() => openDialog(this.delete)}
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

  submit = async commonIssue => {
    const { updateCommonIssue, userId, commonIssueId, setFeedback } = this.props

    await updateCommonIssue(userId, commonIssueId, commonIssue)
    setFeedback({ success: 'Issue updated!' })
  }

  showActionGoBack = () => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Issue deleted!' })
    history.goBack()
  }

  delete = async () => {
    const { deleteCommonIssue, userId, commonIssueId } = this.props

    await deleteCommonIssue(userId, commonIssueId)
    this.showActionGoBack()
  }

  render() {
    const { commonIssue } = this.props

    return commonIssue ? (
      <CommonIssueForm
        buttonText="Update"
        initialData={commonIssue}
        onSubmit={this.submit}
      />
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
