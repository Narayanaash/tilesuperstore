import { Link } from "react-router-dom";

export default function DealBox({ deal }) {
  return (
    <Link to="" className={`deals__box d-flex ${deal.mega ? 'mega' : ''}`}>
        <div className="deals__img">
            <img src={deal.imgUrl} alt="" />
        </div>
        <div className="deals__text">
            <h4>{deal.title}</h4>
            <div className="d-flex">
                <img src="images/icons/star.svg" alt="" />
                <div className="text-blue">{deal.subtitle}</div>
            </div>
        </div>
    </Link>
  )
}
