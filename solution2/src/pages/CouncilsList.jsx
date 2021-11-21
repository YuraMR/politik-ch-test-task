import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  fetchCouncilsList,
  selectCouncilsList,
  selectCouncilsLoading,
} from "../store/slices/councilsSlice";
import DataTable from "../components/data-table/DataTable";

const CouncilsList = () => {
  const dispatch = useDispatch()
  const councilsList = useSelector(selectCouncilsList)
  const councilsLoading = useSelector(selectCouncilsLoading)

  const updateListByQuery = (query) => {
    dispatch(fetchCouncilsList(query))
  }

  useEffect(() => {
    updateListByQuery({ sortBy: 'name', sortOrder: 'desc' })
  }, [dispatch])

  return (
    <div>
      {councilsLoading
        ? 'Loading...'
        : (
          <DataTable
            data={councilsList}
            updateListByQuery={updateListByQuery}
          />
        )
      }
    </div>
  )
}

export default CouncilsList