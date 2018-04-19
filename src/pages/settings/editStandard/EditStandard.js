import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import StandardForm from '../standardForm/'

export class EditStandard extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const {
      history,
      openModal,
      fetchStandard,
      userId,
      standard,
      standardId,
    } = this.props

    setNavTitle('Edit Standard')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>
    )

    !standard && fetchStandard(userId, standardId)
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
  }

  submit = async standard => {
    const { saveStandard, userId, standardId, setFeedback } = this.props

    await saveStandard(userId, standard, standardId)
    setFeedback({ success: 'Standard updated!' })
  }

  showActionGoBack = async () => {
    const { setFeedback, history } = this.props

    await setFeedback({ success: 'Standard deleted!' })
    history.goBack()
  }

  delete = async () => {
    const { deleteStandard, userId, standardId } = this.props

    await deleteStandard(userId, standardId)
    this.showActionGoBack()
  }

  render() {
    const { standard } = this.props

    return standard ? (
      <StandardForm
        initialData={standard}
        buttonText="Update"
        onSubmit={this.submit}
      />
    ) : (
      <LinearProgress />
    )
  }
}

EditStandard.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
