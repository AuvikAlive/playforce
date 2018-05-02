import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { StyledAutoComplete } from './StyledAutoComplete'

const renderInput = inputProps => {
  const { ref, label, ...other } = inputProps

  return (
    <TextField
      fullWidth
      label={label}
      InputProps={{
        inputRef: ref,
        ...other,
      }}
    />
  )
}

const renderSuggestionsContainer = options => {
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion, query)
  const parts = parse(suggestion, matches)

  return (
    <MenuItem component="div" selected={isHighlighted}>
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
    </MenuItem>
  )
}

const getSuggestionValue = suggestion => suggestion

export class AutoComplete extends Component {
  state = { suggestions: [] }

  onChange = (event, { newValue }) => {
    const { onChange } = this.props
    onChange(newValue)
  }

  onSuggestionSelect = (event, { suggestion }) => {
    const { onSuggestionSelect } = this.props

    onSuggestionSelect && onSuggestionSelect(suggestion)
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { getSuggestions } = this.props

    this.setState({
      suggestions: getSuggestions(value),
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  render() {
    const { suggestions } = this.state
    const { label, value } = this.props

    const inputProps = {
      label,
      value,
      onChange: this.onChange,
    }

    return (
      <StyledAutoComplete className="StyledAutoComplete">
        <Autosuggest
          shouldRenderSuggestions={() => true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelect}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderSuggestionsContainer={renderSuggestionsContainer}
          renderInputComponent={renderInput}
          theme={{
            container: {
              position: 'relative',
            },
            suggestionsList: {
              margin: 0,
              padding: 0,
              listStyleType: 'none',
            },
            suggestionsContainerOpen: {
              position: 'absolute',
              zIndex: 1,
              left: 0,
              right: 0,
            },
          }}
        />
      </StyledAutoComplete>
    )
  }
}
