import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { history, openModal, firestore, userId, commonIssueId } = this.props

    setNavTitle('Edit Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>,
    )

    firestore.setListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
      },
    ])
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context
    const { firestore, userId, commonIssueId } = this.props

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()

    firestore.unsetListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
      },
    ])
  }

  onSubmit = commonIssue => {
    const { firestore, userId, commonIssueId } = this.props

    return firestore.update(
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
      },
      { ...commonIssue },
    )
  }

  delete = async () => {
    const { history, firestore, userId, commonIssueId } = this.props

    await firestore.delete({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
    })
    history.goBack()
  }

  render() {
    const { commonIssue } = this.props

    return (
      <CommonIssueForm initialData={commonIssue} onSubmit={this.onSubmit} />
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
