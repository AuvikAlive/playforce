import React, { Component } from 'react'
import { groupBy } from 'lodash'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { AddButton } from '../../../components/addButton/AddButton'
import { Content } from '../../../components/content/Content'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import {
  contextTypesTitleLeftNavBarShadow,
  equipmentTypes,
} from '../../../constants/'

import { onComponentDidMount, onComponentWillUnmount } from './functions/'
import { ListView } from './StyledConditionRatingList'

export class ConditionRatingList extends Component {
  state = {
    value: equipmentTypes[0],
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { match, conditionRatings } = this.props
    const { value } = this.state

    const conditionRatingsAdded =
      !!conditionRatings && conditionRatings.length > 0

    const groupedConditionRatings =
      conditionRatingsAdded && groupBy(conditionRatings, 'itemType')

    return (
      <div>
        <AddButton to={`${match.url}/add`} pulse={!conditionRatingsAdded} />
        <AppBar position="static">
          <Tabs
            fullWidth
            value={value}
            onChange={(event, value) => this.setState({ value })}
          >
            {equipmentTypes.map(itemType => (
              <Tab value={itemType} label={itemType} key={itemType} />
            ))}
          </Tabs>
        </AppBar>

        {conditionRatingsAdded ? (
          <ListView {...{ groupedConditionRatings, match, value }} />
        ) : (
          <Content>
            <EmptyListPlaceholder text="Try adding a condition rating to get started!" />
          </Content>
        )}
      </div>
    )
  }
}

ConditionRatingList.contextTypes = contextTypesTitleLeftNavBarShadow
