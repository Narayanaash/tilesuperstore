import DealBox from "./DealBox";
import { fetchDeals } from "../redux/apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function Deals() {
  const { deals } = useSelector(
    (state) => state.deal
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchDeals(dispatch);
  }, [])

  return (
    <div className="deals">
      <div className="wrapper">
        <div className="deals__row d-flex flex-wrap">
          {deals?.map(deal => (
            <DealBox key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  )
}
