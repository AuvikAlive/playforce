import React from 'react'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import ListItem from '@material-ui/core/ListItem'

export const renderSuggestion = (item, { query, isHighlighted }) => {
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
