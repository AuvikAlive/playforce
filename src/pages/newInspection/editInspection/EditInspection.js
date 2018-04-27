import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import { LinearProgress } from 'material-ui/Progress'
import { FormControlLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'
import { flatten, map, filter } from 'lodash'
import { Content } from '../../../components/content/Content'
import { InspectionItems } from '../inspectionItems/InspectionItems'
import { generatePdf } from '../pdfMake/generatePdf'

export class EditInspection extends Component {
  state = {
    src: '',
    menuAnchor: null,
    certificate: false,
  }

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const {
      openDialog,
      inspection,
      standardsLoaded,
      fetchStandards,
      userId,
      inspectionId,
      fetchInspectionRealTime,
      fetchMaintenanceIssuesRealTime,
    } = this.props
    const { id, inspectionLoaded, maintenanceIssuesLoaded } = inspection

    !standardsLoaded && fetchStandards(userId)
    if (id !== inspectionId) {
      !inspectionLoaded && fetchInspectionRealTime(userId, inspectionId)
      !maintenanceIssuesLoaded &&
        fetchMaintenanceIssuesRealTime(userId, inspectionId)
    }
    // inspection.inspectionLoaded && this.renderPdf(inspection)

    setNavTitle('Edit Inspection')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={this.beforeBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <div>
        <IconButton
          color="inherit"
          aria-label="delete condition rating"
          onClick={() => openDialog(this.delete)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
          <MoreVertIcon aria-label="More" />
        </IconButton>
      </div>
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

  componentWillReceiveProps({ inspection }) {
    // inspection.inspectionLoaded && this.renderPdf(inspection)
  }

  onSwitchChange = event => {
    this.setState({ certificate: event.target.checked })
  }

  openMenu = event => {
    this.setState({ menuAnchor: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ menuAnchor: null })
  }

  // loadInitialData = async () => {
  //   const {
  //     fetchInspectionRealTime,
  //     userId,
  //     inspectionId,
  //     equipmentsSite,
  //     fetchEquipmentsRealTime,
  //   } = this.props

  //   const inspection = await fetchInspectionRealTime(userId, inspectionId)
  //   const siteId = inspection.cover.location.id
  //   equipmentsSite !== siteId && fetchEquipmentsRealTime(userId, siteId)
  // }

  submit = async () => {
    const {
      inspection,
      setFeedback,
      // history,
      userId,
      inspectionId,
      saveInspection,
      fetchInspection,
      // discardInspection,
    } = this.props

    const { coverAdded } = inspection

    if (coverAdded) {
      setFeedback({ error: '', loading: true })

      try {
        await saveInspection({ inspection, userId, inspectionId })
        await fetchInspection(userId, inspectionId)
        // discardInspection()
        setFeedback({ success: 'Inspection updated!', loading: false })
        // history.goBack()
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

  showActionGoBack = async () => {
    const { setFeedback, history, discardInspection } = this.props

    await setFeedback({ success: 'Inspection deleted!' })
    discardInspection()
    history.goBack()
  }

  delete = async () => {
    const { inspection, inspectionId, userId, deleteInspection } = this.props

    await deleteInspection({
      inspection,
      userId,
      inspectionId,
    })
    this.showActionGoBack()
  }

  generateReport = async () => {
    const { inspection, setFeedback, displayName, standards } = this.props
    const { certificate } = this.state

    this.closeMenu()

    const { coverAdded, auditSummaryAdded, conditionRatingsAdded } = inspection

    if (coverAdded && auditSummaryAdded && conditionRatingsAdded) {
      setFeedback({ error: '', loading: true })

      inspection.displayName = displayName

      const appliedStandards = flatten(
        map(inspection.cover.appliedStandards, standardId => {
          return filter(standards, item => item.id === standardId)
        })
      )

      let inspectionWithAppliedStandards = {
        ...inspection,
        cover: { ...inspection.cover, appliedStandards },
      }

      const pdfDocGenerator = await generatePdf(
        inspectionWithAppliedStandards,
        certificate
      )

      pdfDocGenerator.download(
        `${inspection.cover.location.name} - inspection-report.pdf`
      )

      setFeedback({ loading: false })
    } else {
      setFeedback({
        error:
          'Please add a cover, audit summary & condition rating to generate report!',
        loading: false,
      })
    }
  }

  renderPdf = async inspection => {
    const pdfDocGenerator = await generatePdf(inspection, true)
    pdfDocGenerator.getDataUrl(dataUrl => {
      this.setState({ src: dataUrl })
    })
  }

  beforeBack = () => {
    const { history, discardInspection } = this.props

    discardInspection()
    history.goBack()
  }

  render() {
    const { inspection, standardsLoaded, match, error, loading } = this.props
    const { menuAnchor } = this.state
    const {
      auditSummaryAdded,
      complianceIssuesAdded,
      conditionRatingsAdded,
      coverAdded,
      maintenanceIssuesAdded,
      inspectionLoaded,
      maintenanceIssuesLoaded,
    } = inspection

    const added = {
      auditSummaryAdded,
      complianceIssuesAdded,
      conditionRatingsAdded,
      coverAdded,
      maintenanceIssuesAdded,
    }

    return inspectionLoaded && maintenanceIssuesLoaded ? (
      <div>
        <InspectionItems
          {...added}
          match={match}
          error={error}
          loading={loading}
          submit={this.submit}
          buttonText="Update"
        />

        <Content>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.certificate}
                onChange={this.onSwitchChange}
                value="certificate"
                color="primary"
              />
            }
            label="Generate a compliance certificate"
          />
        </Content>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.closeMenu}
        >
          {standardsLoaded && (
            <MenuItem onClick={this.generateReport}>Generate Report</MenuItem>
          )}
        </Menu>
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

EditInspection.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
