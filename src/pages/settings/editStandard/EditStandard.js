import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    const { history, openModal, firestore, userId, standardId } = this.props

    setNavTitle('Edit Standard')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'standards', doc: standardId }],
    })
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context

    const { firestore, userId, standardId } = this.props

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'standards', doc: standardId }],
    })
  }

  onSubmit = standard => {
    const { firestore, userId, standardId } = this.props

    return firestore.update(
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'standards', doc: standardId }],
      },
      { ...standard },
    )
  }

  delete = async () => {
    const { history, firestore, userId, standardId } = this.props

    await firestore.delete({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'standards', doc: standardId }],
    })
    history.goBack()
  }

  render() {
    const { standard } = this.props

    return <StandardForm initialData={standard} onSubmit={this.onSubmit} />
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
