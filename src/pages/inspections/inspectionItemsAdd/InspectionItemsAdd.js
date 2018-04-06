import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import { InspectionItemsList } from '../inspectionItemsList/InspectionItemsList'

export class InspectionItemsAdd extends Component {
  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { openModal } = this.props

    setNavTitle('Add Inspection')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={this.beforeBack}>
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

  publish = async () => {
    const {
      inspection,
      setErrorLoadingState,
      history,
      firebase,
      userId,
      inspectionCount,
      saveInspection,
      discardInspection,
    } = this.props

    const { coverAdded } = inspection

    if (coverAdded) {
      setErrorLoadingState({ error: '', loading: true })

      try {
        await saveInspection({
          inspection,
          userId,
          inspectionCount: inspectionCount ? Number(inspectionCount) + 1 : 1,
        })
        await firebase.updateProfile({
          inspectionCount: inspectionCount ? Number(inspectionCount) + 1 : 1,
        })
        setErrorLoadingState({ loading: false })
        discardInspection()
        history.goBack()
      } catch (error) {
        setErrorLoadingState({ error: error.message, loading: false })
      }
    } else {
      setErrorLoadingState({
        error: 'Please add a cover at least to save!',
        loading: false,
      })
    }
  }

  delete = () => {
    const { discardInspection, history } = this.props

    discardInspection()
    history.goBack()
  }

  beforeBack = () => {
    const { discardInspection, history } = this.props

    discardInspection()
    history.goBack()
  }

  render() {
    const { inspection, match, error, loading } = this.props

    const {
      auditSummaryAdded,
      complianceIssuesAdded,
      conditionRatingsAdded,
      coverAdded,
      maintenanceIssuesAdded,
    } = inspection

    const added = {
      auditSummaryAdded,
      complianceIssuesAdded,
      conditionRatingsAdded,
      coverAdded,
      maintenanceIssuesAdded,
    }

    return (
      <InspectionItemsList
        {...added}
        match={match}
        error={error}
        loading={loading}
        publish={this.publish}
      />
    )
  }
}

InspectionItemsAdd.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
