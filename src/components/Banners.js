import { fetchBanners } from "../redux/apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Banner = ({ banner }) => {
    return <div><img src={banner.imgUrl} alt="" /></div>;
}

export default function Banners() {
  const { banners } = useSelector(
    (state) => state.banner
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBanners(dispatch);
  }, [])

  return (
    <div className="banners">
        <div className="wrapper">
            <div className="banners__row d-flex">
              {banners?.map(banner => (
                <Banner banner={banner} key={banner.id} />
              ))}
            </div>
        </div>
    </div>
  )
}
