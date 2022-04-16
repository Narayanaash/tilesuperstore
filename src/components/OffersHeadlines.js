import OffersHeadlinesBox from "./OffersHeadlinesBox";
import { useSelector, useDispatch } from 'react-redux';
import { fetchOffersheadlines } from "../redux/apiCalls";
import { useEffect } from 'react';

export default function OffersHeadlines() {
  const offersHeadlines = useSelector(
    (state) => state.offersHeadline.offersHeadlines
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchOffersheadlines(dispatch);
  }, [])

  return (
    <div className="offersHeadlines">
        <div className="wrapper">
            <div className="offersHeadlines__row d-flex">
              {offersHeadlines?.map(offersHeadline => (
                <OffersHeadlinesBox key={offersHeadline.id} offersHeadline={offersHeadline} />
              ))}
            </div>
        </div>
    </div>
  )
}
