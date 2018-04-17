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

  onSubmit = standard => {
    const { saveStandard, userId, standardId } = this.props
    return saveStandard(userId, standard, standardId)
  }

  delete = async () => {
    const { history, deleteStandard, userId, standardId } = this.props

    await deleteStandard(userId, standardId)
    history.goBack()
  }

  render() {
    const { standard } = this.props

    return standard ? (
      <StandardForm initialData={standard} onSubmit={this.onSubmit} />
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
