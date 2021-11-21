import {SORT_ORDERS} from "../constants/api";

export const filterArray = ({ array = [], filters = {} }) => {
  const filtersEntries = Object.entries(filters)

  if (filtersEntries.length) {
    return (
      array.filter((item) => (
        filtersEntries.reduce((acc, [key, value]) => {
          const itemValue = String(item[key]).toLowerCase()

          return (
            acc || (itemValue && itemValue.includes(String(value).toLowerCase()))
          )
        }, false)
      ))
    )
  }

  return array
}

export const arraySort = ({ array, sortBy, sortOrder = SORT_ORDERS.asc }) => {
  const arrayCopy = [...array]

  arrayCopy.sort((a, b) => {
    const aValue = a[sortBy]
    const bValue = b[sortBy]

    const isAValueBigger = aValue > bValue

    if (sortOrder === SORT_ORDERS.asc) {
      return isAValueBigger ? 1 : -1
    } else {
      return isAValueBigger ? -1 : 1
    }
  })

  return arrayCopy
}