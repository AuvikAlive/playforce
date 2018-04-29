import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import ConditionRatingForm from '../conditionRatingForm/'

export class EditConditionRating extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openDialog } = this.props

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
        onClick={() => openDialog(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )
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

  submit = async updatedValue => {
    const {
      saveConditionRating,
      userId,
      inspectionId,
      conditionRatingId,
      setFeedback,
    } = this.props

    await saveConditionRating(
      userId,
      inspectionId,
      conditionRatingId,
      updatedValue
    )
    setFeedback({ success: 'Rating updated!' })
  }

  showActionGoBack = async message => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: message })
    history.goBack()
  }

  delete = async () => {
    const {
      deleteConditionRating,
      userId,
      inspectionId,
      conditionRatingId,
    } = this.props

    await deleteConditionRating(userId, inspectionId, conditionRatingId)
    this.showActionGoBack('Rating deleted!')
  }

  render() {
    const { conditionRating } = this.props

    return (
      <ConditionRatingForm
        buttonText="save"
        initialData={conditionRating}
        onSubmit={this.submit}
      />
    )
  }
}

EditConditionRating.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
