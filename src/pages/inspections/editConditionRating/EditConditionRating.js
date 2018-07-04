import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import ConditionRatingForm from '../conditionRatingForm/'
import { onComponentDidMount, submit } from './functions/'

export class EditConditionRating extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { conditionRating } = this.props

    return (
      <ConditionRatingForm
        buttonText="save"
        initialData={conditionRating}
        onSubmit={submit(this)}
      />
    )
  }
}

EditConditionRating.contextTypes = contextTypesTitleLeftRightNav
