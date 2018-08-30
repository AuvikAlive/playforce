import React, { Component } from 'react'
import { compose } from 'recompose'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import { DropTestForm } from '../dropTestForm/DropTestForm'
import { onComponentDidMount, submit } from './functions/'

class BaseEditDropTest extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { dropTest } = this.props

    return (
      <DropTestForm
        buttonText="update"
        initialData={dropTest}
        onSubmit={submit(this)}
      />
    )
  }
}

BaseEditDropTest.contextTypes = contextTypesTitleLeftRightNav

const enhance = compose(
  withDeleteDialog,
  withFeedback
)

export const EditDropTest = enhance(BaseEditDropTest)
