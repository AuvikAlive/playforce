import React, { Component } from "react"
import { compose } from "recompose"
import { withDialog } from "../../../hocs/withDialog/withDialog"
import { withFeedback } from "../../../hocs/withFeedback/withFeedback"
import { NavContext } from "components/NavContextProvider/"
import { onComponentWillUnmountWithTitleLeftRightNav } from "../../../functions/"
import { DropTestForm } from "../dropTestForm/DropTestForm"
import { onComponentDidMount, submit } from "./functions/"

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

BaseEditDropTest.contextType = NavContext

const enhance = compose(
  withDialog,
  withFeedback
)

export const EditDropTest = enhance(BaseEditDropTest)
