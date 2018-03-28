import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import { InspectionItemsList } from '../inspectionItemsList/InspectionItemsList'
import { generatePdf } from '../pdfMake/pdfMake'

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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.savedInspection) {
  //     const pdfDocGenerator = generatePdf(nextProps.savedInspection)

  //     pdfDocGenerator.getDataUrl(dataUrl => {
  //       this.setState({ src: dataUrl })
  //     })
  //   }
  // }

  loadInitialData = inspection => {
    const { loadInspection } = this.props

    loadInspection(inspection)
  }

  publish = async () => {
    const {
      inspection,
      inspectionId,
      setErrorLoadingState,
      history,
      firestore,
      userId,
      toggleEditInspection,
    } = this.props

    const { coverAdded } = inspection

    if (coverAdded) {
      setErrorLoadingState({ error: '', loading: true })

      delete inspection.editMode
      delete inspection.inspectionLoaded
      delete inspection.draftBackup
      delete inspection.equipments

      try {
        await firestore.update(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'inspections', doc: inspectionId }],
          },
          inspection,
        )
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

  generateReport = async () => {
    const { inspection, setErrorLoadingState, displayName } = this.props

    const { coverAdded, auditSummaryAdded } = inspection

    if (coverAdded && auditSummaryAdded) {
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
          'Please add cover, audit summary & condition rating to generate report!',
        loading: false,
      })
    }
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

    return inspection ? (
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
