import React, { Component } from 'react'
import { showActionGo } from '../../../functions/'
import ConditionRatingForm from '../conditionRatingForm/'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  submit,
} from './functions/'

const message = 'Rating saved!'
const pathHead = 'edit/'

export class AddConditionRating extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    return (
      <ConditionRatingForm
        afterSubmit={showActionGo(this, message, pathHead)}
        onSubmit={submit(this)}
      />
    )
  }
}

AddConditionRating.contextTypes = contextTypes
