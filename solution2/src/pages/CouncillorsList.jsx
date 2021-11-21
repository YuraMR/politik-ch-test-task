import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  fetchCouncillorsList,
  selectCouncillorsList,
  selectCouncillorsLoading,
} from "../store/slices/councillorsSlice";
import DataTable from "../components/data-table/DataTable";

const CouncillorsList = () => {
  const dispatch = useDispatch()
  const councillorsList = useSelector(selectCouncillorsList)
  const councillorsLoading = useSelector(selectCouncillorsLoading)

  const updateListByQuery = (query) => {
    dispatch(fetchCouncillorsList(query))
  }

  useEffect(() => {
    updateListByQuery()
  }, [dispatch])

  return (
    <div>
      {councillorsLoading
        ? 'Loading...'
        : (
          <DataTable
            data={councillorsList}
            updateListByQuery={updateListByQuery}
          />
        )
      }
    </div>
  )
}

export default CouncillorsList