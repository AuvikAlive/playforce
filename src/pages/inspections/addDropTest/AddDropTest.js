import React, { Component } from 'react'
import { compose } from 'recompose'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { DropTestForm } from '../dropTestForm/DropTestForm'

class BaseAddDropTest extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Add Drop Test')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { addDropTest, afterSubmit } = this.props

    return <DropTestForm onSubmit={addDropTest} afterSubmit={afterSubmit} />
  }
}

BaseAddDropTest.contextTypes = contextTypesTitleLeftNav

const enhance = compose(withFeedback)

export const AddDropTest = enhance(BaseAddDropTest)
