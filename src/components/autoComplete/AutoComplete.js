import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import { StyledAutoComplete } from './StyledAutoComplete'
import { theme } from './theme'
import {
  renderInput,
  renderSuggestionsContainer,
  renderSuggestion,
  getSuggestionValue,
  onChange,
  onSuggestionSelect,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
} from './functions/'

export class AutoComplete extends Component {
  state = { suggestions: [] }

  render() {
    const { suggestions } = this.state

    const {
      label,
      value,
      multiSection,
      renderSectionTitle,
      getSectionSuggestions,
    } = this.props

    const inputProps = {
      label,
      value,
      onChange: onChange(this),
    }

    return (
      <StyledAutoComplete className="StyledAutoComplete">
        <Autosuggest
          multiSection={multiSection || false}
          suggestions={suggestions}
          shouldRenderSuggestions={() => true}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested(this)}
          onSuggestionsClearRequested={onSuggestionsClearRequested(this)}
          onSuggestionSelected={onSuggestionSelect(this)}
          getSuggestionValue={
            this.props.getSuggestionValue || getSuggestionValue
          }
          inputProps={inputProps}
          renderSuggestion={this.props.renderSuggestion || renderSuggestion}
          renderSuggestionsContainer={renderSuggestionsContainer}
          renderInputComponent={renderInput}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          theme={theme}
        />
      </StyledAutoComplete>
    )
  }
}
