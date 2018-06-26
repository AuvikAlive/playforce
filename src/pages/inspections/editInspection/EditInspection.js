import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import { MoreMenu } from './MoreMenu'

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

  beforeBack = () => {
    const { history, discardInspection } = this.props

    discardInspection()
    history.goBack()
  }

  render() {
    const {
      inspection,
      standardsLoaded,
      match,
      email,
      history,
      error,
      loading,
      setFeedback,
    } = this.props
    const {
      inspectionLoaded,
      conditionRatingsLoaded,
      maintenanceIssuesLoaded,
      complianceIssuesLoaded,
      impactTestsLoaded,
      impactGeneralInfo,
    } = inspection

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

        <MoreMenu
          menuAnchor={this.state.menuAnchor}
          closeMenu={this.closeMenu}
          impactGeneralInfo={impactGeneralInfo}
          email={email}
          inspection={inspection}
          history={history}
          setFeedback={setFeedback}
          createPdf={this.createPdf}
        />

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
