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
    const { history, openModal } = this.props

    setNavTitle('Add Inspection')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
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
      discardInspection,
    } = this.props

    const { coverAdded } = inspection

    if (coverAdded) {
      setErrorLoadingState({ error: '', loading: true })

      const {
        equipments,
        cover,
        auditSummary,
        auditSummaryAdded,
        conditionRatings,
        conditionRatingsAdded,
        complianceIssues,
        complianceIssuesAdded,
        maintenanceIssues,
        maintenanceIssuesAdded,
      } = inspection

      let dataToSave = {
        cover,
        coverAdded,
        auditSummaryAdded,
        conditionRatingsAdded,
        complianceIssuesAdded,
        maintenanceIssuesAdded,
      }

      Object.assign(
        dataToSave,
        auditSummaryAdded && { auditSummary },
        !!equipments && { equipments },
      )

      const db = firebase.firestore()
      const batch = db.batch()
      const inspectionRef = db
        .collection('users')
        .doc(userId)
        .collection('inspections')
        .doc()

      batch.set(inspectionRef, dataToSave)

      if (conditionRatingsAdded) {
        const coditionRatingsRef = inspectionRef.collection('conditionRatings')

        conditionRatings.forEach(item => {
          const ref = coditionRatingsRef.doc()
          batch.set(ref, item)
        })
      }

      if (maintenanceIssuesAdded) {
        const maintenanceIssuesRef = inspectionRef.collection(
          'maintenanceIssues',
        )

        maintenanceIssues.forEach(item => {
          const ref = maintenanceIssuesRef.doc()
          batch.set(ref, item)
        })
      }

      if (complianceIssuesAdded) {
        const complianceIssuesRef = inspectionRef.collection('complianceIssues')

        complianceIssues.forEach(item => {
          const ref = complianceIssuesRef.doc()
          batch.set(ref, item)
        })
      }

      try {
        await batch.commit()
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

  // publish = async () => {
  //   const {
  //     inspection,
  //     setErrorLoadingState,
  //     history,
  //     firestore,
  //     userId,
  //     discardInspection,
  //   } = this.props

  //   const { coverAdded } = inspection

  //   if (coverAdded) {
  //     setErrorLoadingState({ error: '', loading: true })

  //     delete inspection.editMode
  //     delete inspection.inspectionLoaded
  //     delete inspection.draftBackup
  //     delete inspection.equipments

  //     try {
  //       await firestore.add(
  //         {
  //           collection: 'users',
  //           doc: userId,
  //           subcollections: [{ collection: 'inspections' }],
  //         },
  //         inspection,
  //       )
  //       setErrorLoadingState({ loading: false })
  //       discardInspection()
  //       history.goBack()
  //     } catch (error) {
  //       setErrorLoadingState({ error: error.message, loading: false })
  //     }
  //   } else {
  //     setErrorLoadingState({
  //       error: 'Please add a cover at least to save!',
  //       loading: false,
  //     })
  //   }
  // }

  delete = () => {
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
