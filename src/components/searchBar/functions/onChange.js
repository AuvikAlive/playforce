import { onSearch } from './onSearch'

export const onChange = props => event => {
  const searchTerm = event.target.value

  return onSearch(props, searchTerm)
}
