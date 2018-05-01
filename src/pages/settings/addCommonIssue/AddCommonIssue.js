import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import CommonIssueForm from '../commonIssueForm/'

export class AddCommonIssue extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add a Common Issue')

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

  showActionGoBack = commonIssueId => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Common issue added!' })
    history.replace(`edit/${commonIssueId}`)
  }

  submit = async commonIssue => {
    const { addCommonIssue, userId } = this.props
    const commonIssueId = await addCommonIssue(userId, commonIssue)

    return commonIssueId
  }

  render() {
    return (
      <CommonIssueForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddCommonIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
