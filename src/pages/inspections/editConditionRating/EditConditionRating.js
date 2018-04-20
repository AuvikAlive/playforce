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
    const { history, openModal } = this.props

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
        onClick={() => openModal(this.delete)}
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

  onSubmit = updatedValue => {
    const {
      editConditionRating,
      conditionRatingIndex,
      conditionRating,
      history,
    } = this.props

    if (conditionRating.id) {
      updatedValue.id = conditionRating.id
    }

    editConditionRating({
      issueIndex: conditionRatingIndex,
      updatedValue,
    })
    history.goBack()
  }

  delete = () => {
    const { deleteConditionRating, conditionRatingIndex, history } = this.props

    deleteConditionRating(conditionRatingIndex)
    history.goBack()
  }

  render() {
    const { conditionRating } = this.props

    return (
      <ConditionRatingForm
        initialData={conditionRating}
        onSubmit={this.onSubmit}
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
