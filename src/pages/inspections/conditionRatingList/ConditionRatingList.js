import React, { Component } from 'react'
import { groupBy } from 'lodash'
import { AddButton } from '../../../components/addButton/AddButton'
import { Content } from '../../../components/content/Content'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import {
  contextTypesTitleLeftBottomNav,
  equipmentTypes,
} from '../../../constants/'

import {
  onComponentDidMount,
  onComponentWillUnmount,
  setTabBar,
} from './functions/'
import { ListView } from './ListView'

export class ConditionRatingList extends Component {
  state = {
    value: equipmentTypes[0],
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentDidUpdate() {
    setTabBar(this)
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

ConditionRatingList.contextTypes = contextTypesTitleLeftBottomNav
