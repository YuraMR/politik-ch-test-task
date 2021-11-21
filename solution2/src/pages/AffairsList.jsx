import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchAffairsList} from "../store/slices/affairsSlice";
import {selectAffairsList, selectAffairsLoading} from "../store/slices/affairsSlice";
import DataTable from "../components/data-table/DataTable";

const AffairsList = () => {
  const dispatch = useDispatch()
  const affairsList = useSelector(selectAffairsList)
  const affairsLoading = useSelector(selectAffairsLoading)

  const updateListByQuery = (query) => {
    dispatch(fetchAffairsList(query))
  }

  useEffect(() => {
    updateListByQuery({ sortBy: 'updated' })
  }, [dispatch])

  return (
    <div>
      {affairsLoading
        ? 'Loading...'
        : (
          <DataTable
            data={affairsList}
            updateListByQuery={updateListByQuery}
          />
        )
      }
    </div>
  )
}

export default AffairsList