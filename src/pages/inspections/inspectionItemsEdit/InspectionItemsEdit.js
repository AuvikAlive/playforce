import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { flatten, map, filter } from 'lodash'
import { InspectionItemsList } from '../inspectionItemsList/InspectionItemsList'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'
import { generatePdf } from '../pdfMake/generatePdf'

export class InspectionItemsEdit extends Component {
  state = {
    src: '',
    loadingInitialData: true,
  }

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { openModal, inspection } = this.props

    !inspection.inspectionLoaded && this.loadInitialData()

    inspection.inspectionLoaded && this.setState({ loadingInitialData: false })
    // inspection.inspectionLoaded && this.renderPdf(inspection)

    setNavTitle('Edit Inspection')

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

  loadInitialData = async () => {
    const { loadInspection, firebase, userId, inspectionId } = this.props
    const db = firebase.firestore()
    const inspectionRef = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc(inspectionId)

    const inspectionDoc = await inspectionRef.get()
    const inspection = inspectionDoc.data()

    const {
      conditionRatingsAdded,
      maintenanceIssuesAdded,
      complianceIssuesAdded,
    } = inspection

    if (conditionRatingsAdded) {
      let conditionRatings = []
      const querySnapshot = await inspectionRef
        .collection('conditionRatings')
        .get()
      querySnapshot.forEach(doc =>
        conditionRatings.push({
          id: doc.id,
          ...doc.data(),
        }),
      )
      inspection.conditionRatings = conditionRatings
    }

    if (maintenanceIssuesAdded) {
      let maintenanceIssues = []
      const querySnapshot = await inspectionRef
        .collection('maintenanceIssues')
        .get()
      querySnapshot.forEach(doc =>
        maintenanceIssues.push({
          id: doc.id,
          ...doc.data(),
        }),
      )
      inspection.maintenanceIssues = maintenanceIssues
    }

    if (complianceIssuesAdded) {
      let complianceIssues = []
      const querySnapshot = await inspectionRef
        .collection('complianceIssues')
        .get()
      querySnapshot.forEach(doc =>
        complianceIssues.push({
          id: doc.id,
          ...doc.data(),
        }),
      )
      inspection.complianceIssues = complianceIssues
    }

    loadInspection(inspection)
    // this.renderPdf(inspection)
    this.setState({ loadingInitialData: false })
  }

  publish = async () => {
    const {
      inspection,
      setErrorLoadingState,
      history,
      firebase,
      userId,
      inspectionId,
      toggleEditInspection,
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
        deletedConditionRatings,
        complianceIssues,
        complianceIssuesAdded,
        deletedComplianceIssues,
        maintenanceIssues,
        maintenanceIssuesAdded,
        deletedMaintenanceIssues,
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
        .doc(inspectionId)

      batch.update(inspectionRef, dataToSave)

      if (!!deletedConditionRatings) {
        const coditionRatingsRef = inspectionRef.collection('conditionRatings')

        deletedConditionRatings.forEach(item => {
          const ref = coditionRatingsRef.doc(item.id)
          batch.delete(ref)
        })
      }

      if (conditionRatingsAdded) {
        const coditionRatingsRef = inspectionRef.collection('conditionRatings')

        conditionRatings.forEach(item => {
          const ref = item.id
            ? coditionRatingsRef.doc(item.id)
            : coditionRatingsRef.doc()
          item.id ? batch.update(ref, item) : batch.set(ref, item)
        })
      }

      if (!!deletedComplianceIssues) {
        const complianceIssuesRef = inspectionRef.collection('complianceIssues')

        deletedComplianceIssues.forEach(item => {
          const ref = complianceIssuesRef.doc(item.id)
          batch.delete(ref)
        })
      }

      if (complianceIssuesAdded) {
        const complianceIssuesRef = inspectionRef.collection('complianceIssues')

        complianceIssues.forEach(item => {
          const ref = item.id
            ? complianceIssuesRef.doc(item.id)
            : complianceIssuesRef.doc()
          item.id ? batch.update(ref, item) : batch.set(ref, item)
        })
      }

      if (!!deletedMaintenanceIssues) {
        const maintenanceIssuesRef = inspectionRef.collection(
          'maintenanceIssues',
        )

        deletedMaintenanceIssues.forEach(item => {
          const ref = maintenanceIssuesRef.doc(item.id)
          batch.delete(ref)
        })
      }

      if (maintenanceIssuesAdded) {
        const maintenanceIssuesRef = inspectionRef.collection(
          'maintenanceIssues',
        )

        maintenanceIssues.forEach(item => {
          const ref = item.id
            ? maintenanceIssuesRef.doc(item.id)
            : maintenanceIssuesRef.doc()
          item.id ? batch.update(ref, item) : batch.set(ref, item)
        })
      }

      try {
        await batch.commit()
        setErrorLoadingState({ loading: false })
        toggleEditInspection({ editMode: false })
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

  generateReport = async () => {
    const {
      inspection,
      setErrorLoadingState,
      displayName,
      firebase,
      userId,
    } = this.props

    const { coverAdded, auditSummaryAdded, conditionRatingsAdded } = inspection

    if (coverAdded && auditSummaryAdded && conditionRatingsAdded) {
      setErrorLoadingState({ error: '', loading: true })

      delete inspection.editMode
      delete inspection.inspectionLoaded
      delete inspection.draftBackup
      delete inspection.equipments
      inspection.displayName = displayName

      let standards = []

      const db = firebase.firestore()
      const standardsRef = db
        .collection('users')
        .doc(userId)
        .collection('standards')

      const querySnapshot = await standardsRef.get()
      querySnapshot.forEach(doc =>
        standards.push({
          id: doc.id,
          ...doc.data(),
        }),
      )

      const standardsArray = objectToArrayWithId(standards)

      inspection.cover.appliedStandards = flatten(
        map(inspection.cover.appliedStandards, standardId => {
          return filter(standardsArray, item => item.id === standardId)
        }),
      )

      const pdfDocGenerator = await generatePdf(inspection)

      pdfDocGenerator.download(
        `${inspection.cover.location.name} - inspection-report.pdf`,
      )

      setErrorLoadingState({ loading: false })
    } else {
      setErrorLoadingState({
        error:
          'Please add a cover, audit summary & condition rating to generate report!',
        loading: false,
      })
    }
  }

  renderPdf = async inspection => {
    const pdfDocGenerator = await generatePdf(inspection)
    pdfDocGenerator.getDataUrl(dataUrl => {
      this.setState({ src: dataUrl })
    })
  }

  delete = async () => {
    const {
      inspectionId,
      history,
      firestore,
      userId,
      toggleEditInspection,
    } = this.props

    await firestore.delete({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'inspections', doc: inspectionId }],
    })
    toggleEditInspection({ editMode: false })
    history.goBack()
  }

  beforeBack = () => {
    const { toggleEditInspection, history } = this.props

    toggleEditInspection({ editMode: false })
    history.goBack()
  }

  render() {
    const { inspection, match, error, loading } = this.props
    const { loadingInitialData } = this.state

    let added

    if (inspection) {
      const {
        auditSummaryAdded,
        complianceIssuesAdded,
        conditionRatingsAdded,
        coverAdded,
        maintenanceIssuesAdded,
      } = inspection

      added = {
        auditSummaryAdded,
        complianceIssuesAdded,
        conditionRatingsAdded,
        coverAdded,
        maintenanceIssuesAdded,
      }
    }

    return inspection && !loadingInitialData ? (
      <div>
        <InspectionItemsList
          {...added}
          match={match}
          error={error}
          loading={loading}
          publish={this.publish}
          reportButton={
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.generateReport}
            >
              Generate Report
            </Button>
          }
        />
        {this.state.src && (
          <div>
            <object
              width="100%"
              height={500}
              data={this.state.src}
              type="application/pdf"
            >
              pdf
            </object>
          </div>
        )}
      </div>
    ) : (
      <LinearProgress />
    )
  }
}

InspectionItemsEdit.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
