import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Tabs, { Tab } from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { StyledTabs } from './StyledTabs'
import { GeneralTab } from './generalTab/GeneralTab'
import InspectionsTab from './inspectionsTab/InspectionsTab'

class SiteEditWithoutRouter extends Component {
  componentDidMount() {
    const { history } = this.props

    const {
      setLeftNavComponent,
      disableNavBarShadow,
      setNavTitle,
    } = this.context

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    disableNavBarShadow()

    setNavTitle('Edit Site')
  }

  componentWillUnmount() {
    const {
      removeLefNavComponent,
      enableNavBarShadow,
      removeNavTitle,
    } = this.context

    removeLefNavComponent()
    enableNavBarShadow()
    removeNavTitle()
  }

  handleChange = (event, value) => {
    const { match, history } = this.props
    const urlWithoutParam = match.url.substr(0, match.url.lastIndexOf('/'))
    const url = urlWithoutParam + `/${value}`

    history.replace(url)
  }

  render() {
    const { match } = this.props
    const id = parseInt(match.params.id, 10) - 1

    return (
      <StyledTabs>
        <Tabs
          fullWidth
          centered
          classes={{ root: 'my-root' }}
          value={match.params.tabstate}
          onChange={this.handleChange}
        >
          <Tab className="tab-title" value="general" label="General" />
          <Tab className="tab-title" value="inspections" label="Inspections" />
        </Tabs>
        {match.params.tabstate === 'general' && <GeneralTab id={id} />}
        {match.params.tabstate === 'inspections' && <InspectionsTab id={id} />}
      </StyledTabs>
    )
  }
}

export const SiteEdit = withRouter(SiteEditWithoutRouter)

SiteEditWithoutRouter.contextTypes = {
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  disableNavBarShadow: PropTypes.func,
  enableNavBarShadow: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
