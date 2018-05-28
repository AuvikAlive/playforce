import React, { Component } from 'react'
import { ListItem, ListSubheader } from 'material-ui/List'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { groupBy, map } from 'lodash'
import { onValueInputChange } from '../../../utilities/onValueInputChange'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'

const renderSectionTitle = section => {
  return <ListSubheader component="div">{section.title}</ListSubheader>
}

const getSectionSuggestions = section => {
  return section.items
}

const getSuggestionValue = suggestion => suggestion.issue

const renderSuggestion = (item, { query, isHighlighted }) => {
  const suggestion = item.issue
  const matches = match(suggestion, query)
  const parts = parse(suggestion, matches)

  return (
    <ListItem button component="div" selected={isHighlighted}>
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        })}
      </div>
    </ListItem>
  )
}

export class CommonIssueAutoComplete extends Component {
  state = { commonIssues: [], commonIssue: '' }

  componentDidMount() {
    const { commonIssues } = this.props

    this.loadCommonIssues(commonIssues)
  }

  loadCommonIssues = commonIssues => {
    const categorizedCommonIssues = commonIssues.map(item => {
      if (!item.category) {
        item.category = 'uncategorized'
      }

      return item
    })

    const groupedCommonIssues = groupBy(categorizedCommonIssues, 'category')
    const sectionedCommonIssues = map(groupedCommonIssues, (value, key) => {
      return {
        title: key,
        items: value,
      }
    })

    this.setState({ commonIssues: sectionedCommonIssues })
  }

  getCommonIssueSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { commonIssues } = this.state

    return inputLength === 0
      ? commonIssues.filter(({ items }) => !!items.every(item => !!item.issue))
      : commonIssues
          .map(({ title, items }) => {
            return {
              title,
              items: items.filter(
                item =>
                  item.issue.toLowerCase().slice(0, inputLength) === inputValue
              ),
            }
          })
          .filter(({ items }) => items.length > 0)
  }

  onValueInputChange = onValueInputChange

  render() {
    const { commonIssue } = this.state
    const { onCommonIssueSelect } = this.props

    return (
      <AutoComplete
        label="Select a common issue"
        multiSection={true}
        value={commonIssue}
        onChange={this.onValueInputChange('commonIssue')}
        onSuggestionSelect={onCommonIssueSelect}
        getSuggestionValue={getSuggestionValue}
        getSuggestions={this.getCommonIssueSuggestions}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
      />
    )
  }
}
