import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__grid">
          <div className="footer__grid__item">
            <div className="footer__title">Company</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="" className="footer__link">Bathroom Tiles</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Kitchen Tiles</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Floor Tiles</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Wall Tiles</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Natural Stone</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Mosaic Tiles</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Fixing &amp; Finishing</Link>
              </li>
            </ul>
          </div>
          <div className="footer__grid__item">
            <div className="footer__title">About us</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="" className="footer__link">The Company</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Terms and conditions</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer__grid__item">
            <div className="footer__title">Customer Care</div>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="" className="footer__link">Contact Us</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Delivery &amp; Returns</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Refunds</Link>
              </li>
              <li className="footer__item">
                <Link to="" className="footer__link">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>
          <div className="footer__grid__item">
            <div className="footer__title">Social Media</div>
            <ul className="social__list d-flex">
              <li className="social__item">
                <a href="" className="social__link">
                  <img src="images/icons/fb.svg" alt="" />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <img src="images/icons/twitter.svg" alt="" />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <img src="images/icons/vimeo.svg" alt="" />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <img src="images/icons/youtube.svg" alt="" />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <img src="images/icons/linkedin.svg" alt="" />
                </a>
              </li>
              <li className="social__item">
                <a href="" className="social__link">
                  <img src="images/icons/instagram.svg" alt="" />
                </a>
              </li>
            </ul>
            <div className="newsletter">
              <div className="newsletter__title">Let's stay in touch</div>
              <p>Subscribe to our newsletter to<br/>get best offers</p>
              <div className="newsletter__box d-flex justify-between">
                  <input type="text" placeholder="Email address" />
                  <button><img src="images/icons/send.svg" alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright text-center">© 2022 Tilesuperstore.com. All rights reserved.</div>
    </footer>
  )
}
