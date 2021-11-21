import { useHistory } from "react-router";
import queryString from "query-string";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import {SORT_ORDERS} from "../../constants/api";

const DataTable = ({ data, updateListByQuery }) => {
  const history = useHistory()

  const search = queryString.parse(history.location.search)
  const { sortBy, sortOrder } = search

  const dataKeys = Object.keys(data[0] || {})

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow key={dataKeys.join('')}>
            {dataKeys.map((key) => {
              const active = key === sortBy
              const direction = active ? sortOrder : SORT_ORDERS.asc

              const handleClick = () => {
                const query = {
                  ...search,
                }

                if (active) {
                  query.sortOrder = sortOrder === SORT_ORDERS.asc ? SORT_ORDERS.desc : SORT_ORDERS.asc
                } else {
                  query.sortBy = key
                }

                updateListByQuery(query)

                const newSearch = queryString.stringify(query, { skipNull: true })
                history.replace({ search: newSearch })
              }

              return (
                <TableCell key={key}>
                  <TableSortLabel
                    active={active}
                    direction={direction}
                    onClick={handleClick}
                  >
                    {key}
                  </TableSortLabel>
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {Object.entries(item).map(([key, value]) => (
                <TableCell key={key}>
                  {value || '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable