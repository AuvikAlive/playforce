import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ConditionRatingForm from '../conditionRatingForm/'

export class AddConditionRating extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add Condition Rating')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  showActionGoBack = conditionRatingId => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Rating saved!' })
    history.replace(`edit/${conditionRatingId}`)
  }

  submit = async conditionRating => {
    const { addConditionRating, userId, inspectionId } = this.props

    const conditionRatingId = await addConditionRating(
      userId,
      inspectionId,
      conditionRating
    )

    return conditionRatingId
  }

  render() {
    return (
      <ConditionRatingForm
        afterSubmit={this.showActionGoBack}
        onSubmit={this.submit}
      />
    )
  }
}

AddConditionRating.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
