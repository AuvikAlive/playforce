import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import values from 'lodash/values'
import { StyledEditCompliacenIssue } from './StyledEditComplianceIssue'
import { defaultEquipments } from '../../../globals/scales'
import { ComplianceIssueForm } from '../ComplianceIssueForm'

export class EditComplianceIssue extends Component {
  state = {
    commonIssues: [],
    commonIssueIndex: '',
    defaultEquipmentIndex: '',
    finding: '',
    equipment: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
    customFinding: true,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId, complianceIssue } = this.props

    setNavTitle('Edit Compliance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    this.loadInitialData(complianceIssue)

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
    const commonIssues = data && data.commonIssues && values(data.commonIssues)

    if (commonIssues) {
      this.setState({ commonIssues })
    }
  }

  loadInitialData = complianceIssue => {
    const { setCapturedImage } = this.props
    const { image } = complianceIssue

    setCapturedImage(image)
    this.setState({
      ...complianceIssue,
    })
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
      probability,
      severity,
      comments,
      recommendations,
    } = this.state.commonIssues[commonIssueIndex]

    this.setState({
      commonIssueIndex,
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

  toggleCustomFinding = () => {
    const { customFinding } = this.state

    this.setState({
      customFinding: !customFinding,
    })
  }

  editComplianceIssue = () => {
    const {
      editComplianceIssue,
      history,
      setErrorLoadingState,
      image,
    } = this.props
    const {
      commonIssues,
      commonIssueIndex,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
      customFinding,
    } = this.state

    let { finding } = this.state

    if (!customFinding) {
      finding = commonIssues[commonIssueIndex].finding
    }

    if (
      image &&
      finding &&
      standardsClause &&
      equipment &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      setErrorLoadingState({ error: '' })
      editComplianceIssue({
        issueIndex: this.props.complianceIssueIndex,
        updatedValue: {
          image,
          finding,
          equipment,
          standardsClause,
          probability,
          severity,
          comments,
          recommendations,
        },
      })
      history.goBack()
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  delete = () => {
    const { deleteComplianceIssue, complianceIssueIndex, history } = this.props

    deleteComplianceIssue(complianceIssueIndex)
    history.goBack()
  }

  render() {
    const { image, captureImage, error, openModal } = this.props

    return (
      <StyledEditCompliacenIssue className="StyledEditCompliacenIssue">
        <Card>
          {image && <CardMedia className="card-media" image={image} />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={captureImage}
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
              color="inherit"
              className="submit-button discard-button"
              onClick={() => openModal(this.delete)}
            >
              delete
            </Button>

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.editComplianceIssue}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledEditCompliacenIssue>
    )
  }
}

EditComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
