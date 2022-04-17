import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Sign from './Sign';
import { app } from '../firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
const auth = getAuth();

export default function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const [showSignPopUp, setShowSignPopUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(false);
      })
      .catch((error) => {});
  };

  return (
    <>
      <header className="header">
        <div className="header__topbar">
          <div className="wrapper">
            <div className="d-flex justify-end">
              <div className="header__topbar__call d-flex">
                <img src="images/icons/call.svg" alt="" />
                <a href="tel:02089655582">020 8965 5582</a>
              </div>
              <div className="header__topbar__mail d-flex">
                <img src="images/icons/mail.svg" alt="" />
                <a href="mailto:info@tilesuperstore.com">
                  info@tilesuperstore.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header__middle">
          <div className="wrapper d-flex justify-between">
            <a href="/">
              <img src="images/logo.png" alt="" className="header__logo" />
            </a>
            <div className="header__search d-flex justify-between">
              <input type="text" placeholder="Search..." />
              <button>
                <img src="images/icons/search.svg" alt="" />
              </button>
            </div>
            <div className="header__middle__right d-flex">
              <Link to="">
                <img src="images/icons/wishlist.svg" alt="" />
              </Link>
              <div className="header__cart relative">
                <Link to="">
                  <img src="images/icons/cart.svg" alt="" />
                  <div className="header__cart__count d-flex justify-center">
                    {cartCount}
                  </div>
                </Link>
              </div>
              <div className="header__login">
                {user ? (
                  <Link to="" className="btn btn--red" onClick={logOut}>
                    Logout
                  </Link>
                ) : (
                  <Link
                    to=""
                    className="btn btn--red"
                    onClick={() => setShowSignPopUp(true)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <nav className="nav">
          <div className="wrapper">
            <ul className="nav__list d-flex justify-between">
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Bathroom Tiles
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Kitchen Tiles
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Floor Tiles
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Wall Tiles
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Natural Stone
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Mosaic Tiles
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Fixing &amp; Finishing
                </Link>
              </div>
              <div className="nav__item">
                <Link to="" className="nav__link">
                  Help &amp; Support
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </header>
      {showSignPopUp && (
        <Sign setShowSignPopUp={setShowSignPopUp} setUser={setUser} />
      )}
    </>
  );
}
