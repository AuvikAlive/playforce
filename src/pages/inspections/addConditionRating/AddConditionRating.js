import React, { Component } from 'react'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import ConditionRatingForm from '../conditionRatingForm/'

export class AddConditionRating extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Condition Rating')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addConditionRating } = this.props

    return (
      <ConditionRatingForm
        afterSubmit={showActionGo(this, 'Rating saved!', 'edit/')}
        onSubmit={data => addConditionRating(data)}
      />
    )
  }
}

AddConditionRating.contextType = NavContext
