import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import StandardForm from '../standardForm/'

export class AddStandard extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add a Standard')

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

  showActionGoBack = standardId => {
    const { setFeedback, history } = this.props

    setFeedback({ success: 'Standard added!' })
    history.replace(`edit/${standardId}`)
  }

  submit = async standard => {
    const { addStandard, userId } = this.props
    const standardId = await addStandard(userId, standard)

    return standardId
  }

  render() {
    return (
      <StandardForm
        onSubmit={this.submit}
        afterSubmit={this.showActionGoBack}
      />
    )
  }
}

AddStandard.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
