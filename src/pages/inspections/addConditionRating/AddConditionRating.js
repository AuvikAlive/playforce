import React, { Component } from 'react'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  showActionGo,
} from '../../../functions/'
import ConditionRatingForm from '../conditionRatingForm/'
import { submit } from './submit'

export class AddConditionRating extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add condition rating')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    return (
      <ConditionRatingForm
        afterSubmit={showActionGo(this, 'Rating saved!', 'edit/')}
        onSubmit={submit(this)}
      />
    )
  }
}

AddConditionRating.contextTypes = contextTypesTitleLeftNav
