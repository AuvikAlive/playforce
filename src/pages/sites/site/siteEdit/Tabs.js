import React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import { StyledTabs } from './StyledTabs'
import { StyledTabContent } from './StyledTabContent'
import { GeneralTab } from './generalTab/GeneralTab'

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    const { id } = this.props

    return (
      <StyledTabs>
        <Tabs
          fullWidth
          centered
          classes={{ root: 'my-root' }}
          value={value}
          onChange={this.handleChange}
        >
          <Tab className="tab-title" label="General" />
          <Tab className="tab-title" label="Inspections" />
        </Tabs>
        {value === 0 && <GeneralTab id={id} />}
        {value === 1 && (
          <StyledTabContent>Inspections content</StyledTabContent>
        )}
      </StyledTabs>
    )
  }
}

export default SimpleTabs
