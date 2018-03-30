import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { InspectionItemsList } from '../inspectionItemsList/InspectionItemsList'
import { generatePdf } from '../pdfMake/generatePdf'

export class InspectionItemsEdit extends Component {
  state = {
    src: '',
    loadingInitialData: false,
  }

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const {
      openModal,
      firestore,
      userId,
      inspection,
      savedInspection,
      inspectionId,
    } = this.props

    !inspection.inspectionLoaded &&
      savedInspection &&
      this.loadInitialData(savedInspection)

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'inspections', doc: inspectionId }],
    })

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

    const { firestore, userId, inspectionId } = this.props

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'inspections', doc: inspectionId }],
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.inspection) {
      const pdfDocGenerator = generatePdf(nextProps.inspection)
      pdfDocGenerator.getDataUrl(dataUrl => {
        this.setState({ src: dataUrl })
      })
    }
  }

  loadInitialData = async inspection => {
    this.setState({ loadingInitialData: true })

    const { loadInspection, firebase, userId, inspectionId } = this.props
    const {
      conditionRatingsAdded,
      maintenanceIssuesAdded,
      complianceIssuesAdded,
    } = inspection
    const db = firebase.firestore()
    const inspectionRef = db
      .collection('users')
      .doc(userId)
      .collection('inspections')
      .doc(inspectionId)

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
        .doc(inspectionId)

      batch.update(inspectionRef, dataToSave)

      if (conditionRatingsAdded) {
        const coditionRatingsRef = inspectionRef.collection('conditionRatings')

        conditionRatings.forEach(item => {
          const ref = item.id
            ? coditionRatingsRef.doc(item.id)
            : coditionRatingsRef.doc()
          item.id ? batch.update(ref, item) : batch.set(ref, item)
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

      if (complianceIssuesAdded) {
        const complianceIssuesRef = inspectionRef.collection('complianceIssues')

        complianceIssues.forEach(item => {
          const ref = item.id
            ? complianceIssuesRef.doc(item.id)
            : complianceIssuesRef.doc()
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

  // publish = async () => {
  //   const {
  //     inspection,
  //     inspectionId,
  //     setErrorLoadingState,
  //     history,
  //     firestore,
  //     userId,
  //     toggleEditInspection,
  //   } = this.props

  //   const { coverAdded } = inspection

  //   if (coverAdded) {
  //     setErrorLoadingState({ error: '', loading: true })

  //     delete inspection.editMode
  //     delete inspection.inspectionLoaded
  //     delete inspection.draftBackup
  //     delete inspection.equipments

  //     try {
  //       await firestore.update(
  //         {
  //           collection: 'users',
  //           doc: userId,
  //           subcollections: [{ collection: 'inspections', doc: inspectionId }],
  //         },
  //         inspection,
  //       )
  //       setErrorLoadingState({ loading: false })
  //       toggleEditInspection({ editMode: false })
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

  generateReport = async () => {
    const { inspection, setErrorLoadingState, displayName } = this.props

    const { coverAdded, auditSummaryAdded, conditionRatingsAdded } = inspection

    if (coverAdded && auditSummaryAdded && conditionRatingsAdded) {
      setErrorLoadingState({ error: '', loading: true })

      delete inspection.editMode
      delete inspection.inspectionLoaded
      delete inspection.draftBackup
      delete inspection.equipments
      inspection.displayName = displayName

      const pdfDocGenerator = generatePdf(inspection)

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
