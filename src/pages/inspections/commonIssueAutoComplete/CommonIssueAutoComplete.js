import React, { Component } from 'react'
import { onValueInputChange } from '../../../functions/onValueInputChange'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { state } from './state'
import {
  renderSectionTitle,
  getSectionSuggestions,
  getSuggestionValue,
  renderSuggestion,
  loadCommonIssues,
  getCommonIssueSuggestions,
} from './functions/'

export class CommonIssueAutoComplete extends Component {
  state = state

  componentDidMount() {
    loadCommonIssues(this)
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
        getSuggestions={getCommonIssueSuggestions(this)}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
      />
    )
  }
}
