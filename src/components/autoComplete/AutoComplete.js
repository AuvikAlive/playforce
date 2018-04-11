import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
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

const renderSuggestion = (suggestion, filterProperty) => (
  <MenuItem component="div">
    {filterProperty ? suggestion[filterProperty] : suggestion}
  </MenuItem>
)

const getSuggestions = (value, domain, filterProperty) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? domain
    : domain.filter(
        item =>
          filterProperty
            ? item[filterProperty].toLowerCase().slice(0, inputLength) ===
              inputValue
            : item.toLowerCase().slice(0, inputLength) === inputValue
      )
}

const getSuggestionValue = suggestion => suggestion

export class AutoComplete extends Component {
  state = { suggestions: [] }

  onChange = (event, { newValue }) => {
    const { onChange } = this.props

    onChange(newValue)
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { domain = [], filterProperty } = this.props

    this.setState({
      suggestions: getSuggestions(value, domain, filterProperty),
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  render() {
    const { suggestions } = this.state
    const { label, value, filterProperty } = this.props

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
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={suggestion =>
            renderSuggestion(suggestion, filterProperty)
          }
          inputProps={inputProps}
          renderSuggestionsContainer={renderSuggestionsContainer}
          renderInputComponent={renderInput}
          theme={{
            suggestionsList: {
              margin: 0,
              padding: 0,
              listStyleType: 'none',
            },
          }}
        />
      </StyledAutoComplete>
    )
  }
}
