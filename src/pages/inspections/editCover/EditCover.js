import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { CoverFormContainer } from '../coverForm/CoverFormContainer'

export class EditCover extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const {
      history,
      inspectionLoaded,
      fetchInspectionRealTime,
      userId,
      inspectionId,
    } = this.props

    setNavTitle('Cover')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !inspectionLoaded &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  submit = async cover => {
    const { updateCover, userId, inspectionId, setFeedback } = this.props

    await updateCover(userId, inspectionId, cover)
    setFeedback({ success: 'Cover saved!' })
  }

  render() {
    const { inspectionLoaded, cover } = this.props

    return inspectionLoaded ? (
      <CoverFormContainer
        buttonText="save"
        onSubmit={this.submit}
        initialData={cover}
      />
    ) : (
      <LinearProgress />
    )
  }
}

EditCover.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
