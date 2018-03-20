import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import values from 'lodash/values'
import { StyledAddCompliaceIssue } from './StyledAddComplianceIssue'
import { defaultEquipments } from '../../../globals/scales'
import { ComplianceIssueForm } from '../ComplianceIssueForm'

export class AddComplianceIssue extends Component {
  state = {
    commonIssues: [],
    commonIssueIndex: '',
    defaultEquipmentIndex: '',
    image: null,
    finding: '',
    equipment: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId } = this.props

    setNavTitle('Add Compliance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues' }],
      },
    ])
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId } = this.props

    removeNavTitle()
    removeLefNavComponent()

    firestore.unsetListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues' }],
      },
    ])
  }

  componentWillReceiveProps({ data, userId }) {
    const commonIssues = data.commonIssues && values(data.commonIssues)

    if (commonIssues) {
      this.setState({ commonIssues })
    }
  }

  capture = () => {
    this.fileInput.click()
  }

  getFile = event => {
    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])

    reader.addEventListener(
      'load',
      () => {
        this.setState({ image: reader.result })
      },
      false,
    )
  }

  onEquipmentChange = event => {
    const defaultEquipmentIndex = event.target.value

    this.setState({
      defaultEquipmentIndex,
      equipment: defaultEquipments[defaultEquipmentIndex],
    })
  }

  onFindingChange = event => {
    const commonIssueIndex = event.target.value
    const {
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state.commonIssues[commonIssueIndex]

    this.setState({
      finding,
      commonIssueIndex,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addComplianceIssue = () => {
    const { addComplianceIssue, history, setErrorLoadingState } = this.props
    const {
      image,
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    if (
      image &&
      finding &&
      equipment &&
      standardsClause &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      setErrorLoadingState({ error: '' })
      addComplianceIssue({
        image,
        finding,
        equipment,
        standardsClause,
        probability,
        severity,
        comments,
        recommendations,
      })
      history.goBack()
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { image } = this.state

    const { error } = this.props

    return (
      <StyledAddCompliaceIssue className="StyledAddCompliaceIssue">
        <Card>
          {image && <CardMedia className="card-media" image={image} />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.capture}
            >
              Capture Image
            </Button>

            <ComplianceIssueForm
              {...this.state}
              onEquipmentChange={this.onEquipmentChange}
              onInputChange={this.onInputChange}
              onFindingChange={this.onFindingChange}
            />

            {error && <p className="error">{error}</p>}

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.addComplianceIssue}
            >
              save
            </Button>
          </CardContent>
        </Card>
        <input
          type="file"
          accept="image/*"
          // capture="environment"
          style={{ display: 'none' }}
          ref={input => {
            this.fileInput = input
          }}
          onChange={this.getFile}
        />
      </StyledAddCompliaceIssue>
    )
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
