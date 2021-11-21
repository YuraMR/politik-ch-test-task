const COUNCILLORS_LIST_API_URL = 'http://ws-old.parlament.ch/councillors?format=json'

const fetchData = async (apiUrl) => {
  const resp = await fetch(apiUrl)
  return resp.json()
}

const filterArray = ({ array = [], filters = {} }) => {
  const filtersEntries = Object.entries(filters)

  if (filtersEntries.length) {
    return (
      array.filter((item) => (
        filtersEntries.reduce((acc, [key, value]) => {
          const itemValue = String(item[key])

          return (
            acc || (itemValue && itemValue.includes(value))
          )
        }, false)
      ))
    )
  }

  return array
}

const arraySort = ({ array, sortBy, sortOrder = 'asc' }) => {
  const arrayCopy = [...array]

  arrayCopy.sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]

    const isAValueBigger = aValue > bValue

    if (sortOrder === 'asc') {
      return isAValueBigger ? 1 : -1
    } else {
      return isAValueBigger ? -1 : 1
    }
  })

  return arrayCopy
}

const fetchCouncillorsList = async (queryParams = {}) => {
  const data = await fetchData(COUNCILLORS_LIST_API_URL);

  const { sortBy, sortOrder, ...filters } = queryParams

  const filteredData = filterArray({ array: data, filters })

  return arraySort({ array: filteredData, sortBy, sortOrder })
}
