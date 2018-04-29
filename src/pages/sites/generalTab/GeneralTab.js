import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import { SiteFormContainer } from '../../../components/siteForm/SiteFormContainer'

export class GeneralTab extends Component {
  state = {
    operator: '',
    name: '',
    address: '',
    division: '',
  }

  componentDidMount() {
    this.context.setNavTitle('Edit Site')
    const { site, fetchSite, userId, siteId } = this.props

    !site && fetchSite(userId, siteId)
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async site => {
    const { updateSite, userId, siteId, setFeedback } = this.props

    await updateSite(userId, siteId, site)
    setFeedback({ success: 'Site updated!' })
  }

  render() {
    const { site } = this.props

    return site ? (
      <SiteFormContainer
        buttonText="update"
        initialData={site}
        onSubmit={this.submit}
      />
    ) : (
      <LinearProgress />
    )
  }
}

GeneralTab.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
