import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
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

  showActionGoBack = async (message, conditionRatingId) => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: message })
    history.replace(`edit/${conditionRatingId}`)
  }

  submit = async conditionRating => {
    const { addConditionRating, userId, inspectionId } = this.props

    const conditionRatingId = await addConditionRating(
      userId,
      inspectionId,
      conditionRating
    )
    this.showActionGoBack('Condition published!', conditionRatingId)
  }

  render() {
    return <ConditionRatingForm onSubmit={this.submit} />
  }
}

AddConditionRating.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
