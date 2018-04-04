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
  }

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { openModal, inspection } = this.props

    !inspection.inspectionLoaded && this.loadInitialData()
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

  loadInitialData = () => {
    const { fetchInspection, userId, inspectionId } = this.props

    fetchInspection(userId, inspectionId)
  }

  publish = async () => {
    const {
      inspection,
      setErrorLoadingState,
      history,
      userId,
      inspectionId,
      saveInspection,
      toggleEditInspection,
    } = this.props

    const { coverAdded } = inspection

    if (coverAdded) {
      setErrorLoadingState({ error: '', loading: true })

      try {
        await saveInspection(inspection, userId, inspectionId)
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

    return inspection && inspection.inspectionLoaded ? (
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
