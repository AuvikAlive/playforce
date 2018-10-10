import React, { Component } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { Content } from '../../../components/content/Content'
import { contextTypesTitleLeftRightNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  closeMenu,
  showContentWhenLoaded,
} from '../../../functions/'
import { InspectionItems } from '../inspectionItems/InspectionItems'
import { MoreMenu } from './MoreMenu'
import {
  onComponentDidMount,
  // onComponentWillReceiveProps,
  toggleInspectionCertificate,
  toggleInspectionComplete,
  createPdf,
} from './functions/'

export class EditInspection extends Component {
  state = {
    src: undefined,
    menuAnchor: null,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  componentWillReceiveProps(nextProps) {
    // onComponentWillReceiveProps(this, nextProps)
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
      // conditionRatingsLoaded,
      // maintenanceIssuesLoaded,
      // complianceIssuesLoaded,
      // impactTestsLoaded,
      // playgroundsLoaded,
      impactGeneralInfo,
      certificate,
      complete,
      customCertificateText,
    } = inspection

    const isLoaded =
      inspectionLoaded &&
      // conditionRatingsLoaded &&
      // complianceIssuesLoaded &&
      // maintenanceIssuesLoaded &&
      // impactTestsLoaded &&
      // playgroundsLoaded &&
      standardsLoaded

    return showContentWhenLoaded(
      isLoaded,
      <div>
        <InspectionItems
          inspection={inspection}
          certificate={certificate}
          customCertificateText={customCertificateText}
          match={match}
          error={error}
          loading={loading}
        />

        <Content>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={certificate}
                  onChange={toggleInspectionCertificate(this)}
                  value="certificate"
                  color="primary"
                />
              }
              label="Generate a compliance certificate"
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={complete}
                  onChange={toggleInspectionComplete(this)}
                  value="complete"
                  color="primary"
                />
              }
              label="Inspection completed"
            />
          </FormGroup>
        </Content>

        <MoreMenu
          menuAnchor={this.state.menuAnchor}
          closeMenu={closeMenu(this)}
          impactGeneralInfo={impactGeneralInfo}
          email={email}
          inspection={inspection}
          history={history}
          setFeedback={setFeedback}
          createPdf={createPdf(this)}
        />

        {this.state.src && (
          <div>
            <object width="100%" height={500} data={this.state.src}>
              pdf
            </object>
          </div>
        )}
      </div>
    )
  }
}

EditInspection.contextTypes = contextTypesTitleLeftRightNavUnsubscriber
