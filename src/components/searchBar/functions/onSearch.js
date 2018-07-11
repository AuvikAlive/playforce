export const onSearch = async ({ onSearch, setSearchResults }, searchTerm) => {
  const results = await onSearch(searchTerm)

  setSearchResults(results)
}
