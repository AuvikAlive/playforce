import React from 'react'
import { withRouter } from 'react-router'
import Tabs, { Tab } from 'material-ui/Tabs'
import { StyledTabs } from './StyledTabs'
import { GeneralTab } from './generalTab/GeneralTab'
import InspectionsTab from './inspectionsTab/InspectionsTab'

class SimpleTabs extends React.Component {
  handleChange = (event, value) => {
    const { match, history } = this.props
    const urlWithoutParam = match.url.substr(0, match.url.lastIndexOf('/'))
    const url = urlWithoutParam + `/${value}`

    history.replace(url)
  }

  render() {
    const { id, match } = this.props

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

export default withRouter(SimpleTabs)
