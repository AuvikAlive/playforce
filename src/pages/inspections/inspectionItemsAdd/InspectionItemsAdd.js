import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { InspectionItemsList } from '../inspectionItemsList/InspectionItemsList'

export class InspectionItemsAdd extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context

    setNavTitle('Add Inspection')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={this.beforeBack}>
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  submit = async () => {
    const {
      inspection,
      setFeedback,
      firebase,
      userId,
      inspectionCount,
      saveInspection,
      fetchInspection,
      history,
    } = this.props

    const { coverAdded } = inspection

    if (coverAdded) {
      setFeedback({ error: '', loading: true })

      try {
        const inspectionId = await saveInspection({
          inspection,
          userId,
          inspectionCount: inspectionCount ? Number(inspectionCount) + 1 : 1,
        })
        await Promise.all([
          fetchInspection(userId, inspectionId),
          firebase.updateProfile({
            inspectionCount: inspectionCount ? Number(inspectionCount) + 1 : 1,
          }),
        ])
        await setFeedback({ success: 'Inspection published!', loading: false })
        history.replace('edit', {
          id: inspectionId,
        })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
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
        submit={this.submit}
      />
    )
  }
}

InspectionItemsAdd.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
