import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  fetchCouncillorsList,
  selectCouncillorsList,
  selectCouncillorsLoading,
} from "../store/slices/councillorsSlice";

const CouncillorsList = () => {
  const dispatch = useDispatch()
  const councillorsList = useSelector(selectCouncillorsList)
  const councillorsLoading = useSelector(selectCouncillorsLoading)

  useEffect(() => {
    dispatch(fetchCouncillorsList())
  }, [dispatch])

  return (
    <div>
      {councillorsLoading
        ? 'Loading...'
        : (
          councillorsList.map((item) => (
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

export default CouncillorsList