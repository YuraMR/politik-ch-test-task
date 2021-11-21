import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  fetchCouncilsList,
  selectCouncilsList,
  selectCouncilsLoading,
} from "../store/slices/councilsSlice";

const CouncilsList = () => {
  const dispatch = useDispatch()
  const councilsList = useSelector(selectCouncilsList)
  const councilsLoading = useSelector(selectCouncilsLoading)

  useEffect(() => {
    dispatch(fetchCouncilsList({ sortBy: 'name', sortOrder: 'desc' }))
  }, [dispatch])

  return (
    <div>
      {councilsLoading
        ? 'Loading...'
        : (
          councilsList.map((item) => (
            <div key={item.id}>
              {Object.entries(item).map(([key, value]) => (
                <span key={key}>{key}: {value}&nbsp;</span>
              ))}
            </div>
          ))
        )
      }
    </div>
  )
}

export default CouncilsList