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
import { isEmpty } from 'react-redux-firebase'

export class EditInspection extends Component {
  state = {
    src: undefined,
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
      fetchConditionRatingsRealTime,
      fetchComplianceIssuesRealTime,
      fetchMaintenanceIssuesRealTime,
    } = this.props
    const {
      inspectionLoaded,
      conditionRatingsLoaded,
      complianceIssuesLoaded,
      maintenanceIssuesLoaded,
    } = inspection

    !standardsLoaded && fetchStandards(userId)
    !inspectionLoaded && fetchInspectionRealTime(userId, inspectionId)
    !conditionRatingsLoaded &&
      fetchConditionRatingsRealTime(userId, inspectionId)
    !complianceIssuesLoaded &&
      fetchComplianceIssuesRealTime(userId, inspectionId)
    !maintenanceIssuesLoaded &&
      fetchMaintenanceIssuesRealTime(userId, inspectionId)

    // inspection.inspectionLoaded && standardsLoaded && this.renderPdf()

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

  componentWillReceiveProps({ inspection, standardsLoaded }) {
    // inspection.inspectionLoaded && standardsLoaded && this.renderPdf()
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

  showActionGoBack = message => {
    const { setFeedback, history, discardInspection } = this.props

    setFeedback({ success: message })
    discardInspection()
    history.goBack()
  }

  delete = async () => {
    const { inspection, inspectionId, userId, deleteInspection } = this.props

    await deleteInspection(inspection, userId, inspectionId)
    this.showActionGoBack('Inspection deleted!')
  }

  generateReport = async () => {
    this.closeMenu()

    const { inspection, setFeedback } = this.props
    const { auditSummary, conditionRatingsAdded } = inspection

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      setFeedback({ error: '', loading: true })

      const pdfDocGenerator = await this.createPdf()

      pdfDocGenerator.download(
        `${inspection.cover.location.name} - inspection-report.pdf`,
        () => setFeedback({ loading: false })
      )
    } else {
      setFeedback({
        error:
          'Please add audit summary & condition rating to generate report!',
        loading: false,
      })
    }
  }

  createPdf = async () => {
    const { inspection, displayName, standards } = this.props
    const { certificate } = this.state

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

    return pdfDocGenerator
  }

  renderPdf = async () => {
    const { inspection } = this.props
    const { auditSummary, conditionRatingsAdded } = inspection

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      const pdfDocGenerator = await this.createPdf()

      pdfDocGenerator.getDataUrl(dataUrl => {
        this.setState({ src: dataUrl })
      })
    }
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
      auditSummary,
      complianceIssuesAdded,
      conditionRatingsAdded,
      maintenanceIssuesAdded,
      inspectionLoaded,
      conditionRatingsLoaded,
      maintenanceIssuesLoaded,
      complianceIssuesLoaded,
    } = inspection

    const added = {
      auditSummaryAdded: !isEmpty(auditSummary),
      complianceIssuesAdded,
      conditionRatingsAdded,
      maintenanceIssuesAdded,
    }

    return inspectionLoaded &&
      conditionRatingsLoaded &&
      complianceIssuesLoaded &&
      maintenanceIssuesLoaded ? (
      <div>
        <InspectionItems
          {...added}
          match={match}
          error={error}
          loading={loading}
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
          MenuListProps={{ disablePadding: true }}
        >
          {standardsLoaded && (
            <MenuItem onClick={this.generateReport}>Generate Report</MenuItem>
          )}
        </Menu>
        {this.state.src && (
          <div>
            <object width="100%" height={500} data={this.state.src}>
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
