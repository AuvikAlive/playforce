import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import LinearProgress from '@material-ui/core/LinearProgress'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { flatten, map, filter, isEmpty } from 'lodash'
import { Content } from '../../../components/content/Content'
import { InspectionItems } from '../inspectionItems/InspectionItems'
import { generatePdf } from '../pdfMake/generatePdf'
import { makeReportTitle } from '../makeReportTitle'

export class EditInspection extends Component {
  state = {
    src: undefined,
    menuAnchor: null,
    certificate: false,
  }

  async componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
      addUnsubscriber,
    } = this.context
    const {
      openDialog,
      inspection,
      standardsLoaded,
      fetchStandards,
      userId,
      inspectionId,
      fetchInspectionRealTime,
      fetchConditionRatings,
      fetchComplianceIssues,
      fetchMaintenanceIssues,
      fetchImpactTestsRealTime,
    } = this.props
    const {
      inspectionLoaded,
      conditionRatingsLoaded,
      complianceIssuesLoaded,
      maintenanceIssuesLoaded,
      impactTestsLoaded,
    } = inspection

    !standardsLoaded && fetchStandards(userId)
    !inspectionLoaded &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !conditionRatingsLoaded && fetchConditionRatings(userId, inspectionId)
    !complianceIssuesLoaded && fetchComplianceIssues(userId, inspectionId)
    !maintenanceIssuesLoaded && fetchMaintenanceIssues(userId, inspectionId)
    !impactTestsLoaded &&
      addUnsubscriber(await fetchImpactTestsRealTime(userId, inspectionId))

    // inspectionLoaded &&
    //   impactTestsLoaded &&
    //   standardsLoaded &&
    //   this.renderPdf(inspection)

    setNavTitle('Edit Inspection')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={this.beforeBack}
      >
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
    // inspection.inspectionLoaded &&
    //   inspection.impactTestsLoaded &&
    //   standardsLoaded &&
    //   this.renderPdf(inspection)
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
    const {
      cover: { location, inspectionType },
      auditSummary,
      conditionRatingsAdded,
    } = inspection

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      setFeedback({ error: '', loading: true })

      const pdfDocGenerator = await this.createPdf(inspection)

      pdfDocGenerator.download(
        `${location.name} - ${makeReportTitle(inspectionType)}.pdf`,
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

  emailReport = async () => {
    this.closeMenu()

    const { inspection, setFeedback, email } = this.props
    const {
      cover: { location, inspectionType },
      auditSummary,
      conditionRatingsAdded,
    } = inspection

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      setFeedback({ error: '', loading: true })

      const pdfDocGenerator = await this.createPdf(inspection)
      const url =
        'https://us-central1-inspection-app-49829.cloudfunctions.net/sendEmail'

      pdfDocGenerator.getDataUrl(async dataUrl => {
        const data = {
          filename: `${location.name} - ${makeReportTitle(inspectionType)}.pdf`,
          dataUrl,
          email,
        }

        try {
          await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
          })

          setFeedback({ loading: false, success: 'Report sent as email!' })
        } catch (error) {
          setFeedback({ loading: false, error: 'Sorry, something went wrong!' })
          console.log(error)
        }
      })
    } else {
      setFeedback({
        error:
          'Please add audit summary & condition rating to generate report!',
        loading: false,
      })
    }
  }

  createPdf = async inspection => {
    const { displayName, standards } = this.props
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

  renderPdf = async inspection => {
    const { auditSummary, conditionRatingsAdded } = inspection

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      const pdfDocGenerator = await this.createPdf(inspection)

      pdfDocGenerator.getDataUrl(dataUrl => {
        this.setState({ src: dataUrl })
      })
    }
  }

  addImpactTest = () => {
    const { history, inspectionId } = this.props

    history.push(`${inspectionId}/impactTest/addAttenuationTest`)
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
      inspectionLoaded,
      conditionRatingsLoaded,
      maintenanceIssuesLoaded,
      complianceIssuesLoaded,
      impactTestsLoaded,
      impactGeneralInfo,
    } = inspection

    const impactGeneralInfoAdded = !isEmpty(impactGeneralInfo)

    return inspectionLoaded &&
      conditionRatingsLoaded &&
      complianceIssuesLoaded &&
      maintenanceIssuesLoaded &&
      impactTestsLoaded &&
      standardsLoaded ? (
      <div>
        <InspectionItems
          inspection={inspection}
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
          <MenuItem onClick={this.generateReport}>Generate Report</MenuItem>
          <MenuItem onClick={this.emailReport}>Email Report</MenuItem>
          {!impactGeneralInfoAdded && (
            <MenuItem onClick={this.addImpactTest}>Add Impact Test</MenuItem>
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
  addUnsubscriber: PropTypes.func,
}
