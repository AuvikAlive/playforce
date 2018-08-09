import React, { Component } from 'react'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  onComponentWillUnmountWithTitleLeftRightNav,
} from '../../../functions/'
import ConditionRatingForm from '../conditionRatingForm/'
import { deleteConditionRating, submit } from './functions/'

export class EditConditionRating extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftRightNavDelete(
      this,
      'Edit Rating',
      deleteConditionRating
    )
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
