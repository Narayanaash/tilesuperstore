import { fetchCollections } from "../redux/apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addToCart } from "../redux/slices/cartSlice";

export default function Collections() {
  const { collections } = useSelector(
    (state) => state.collection
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCollections(dispatch);
  }, [])

  const handleClick = (e, item) => {
      e.preventDefault();
      dispatch(addToCart(item));
  }

  return (
    <div className="collections">
        <div className="wrapper">
            <div className="collections__grid">
                <div className="collections__item relative">
                    <img src={collections[0]?.imgUrl} alt="" />
                    <div className="collections__item__text">
                        <div>NEW ARRIVALS</div>
                        <h2>Get The<br />look for less</h2>
                        <a href="" className="btn btn--red" onClick={(e) => handleClick(e, collections[0])}>ADD TO CART</a>
                    </div>
                </div>
                {collections?.slice(1).map(collection => (
                    <div key={collection.id} className="collections__item relative">
                        <img src={collection.imgUrl} alt="" />
                        <div className="collections__item__text">
                            <div>{collection.title}</div>
                            <a href="" className="btn btn--red" onClick={(e) => handleClick(e, collection)}>ADD TO CART</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
