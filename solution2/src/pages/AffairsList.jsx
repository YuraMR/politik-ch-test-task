import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchAffairsList} from "../store/slices/affairsSlice";
import {selectAffairsList, selectAffairsLoading} from "../store/slices/affairsSlice";

const AffairsList = () => {
  const dispatch = useDispatch()
  const affairsList = useSelector(selectAffairsList)
  const affairsLoading = useSelector(selectAffairsLoading)

  useEffect(() => {
    dispatch(fetchAffairsList({ sortBy: 'updated' }))
  }, [dispatch])

  return (
    <div>
      {affairsLoading
        ? 'Loading...'
        : (
          affairsList.map((item) => (
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

export default AffairsList