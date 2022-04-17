import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { app } from '../firebase-config';

const auth = getAuth();

export default function SignBottom({ setUser, setShowSignPopUp }) {
  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setShowSignPopUp(false);
      })
      .catch((error) => {
        setShowSignPopUp(false);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setShowSignPopUp(false);
      })
      .catch((error) => {
        setShowSignPopUp(false);
      });
  };

  return (
    <div className="sign__bottom">
      <div className="sign__bottom__heading text-center">Or Login with</div>
      <div className="sign__bottom__socialLogins d-flex">
        <div className="facebook d-flex" onClick={signInWithFacebook}>
          <img src="images/icons/fb-white.svg" alt="" />
          Facebook
        </div>
        <div className="google d-flex" onClick={signInWithGoogle}>
          <img src="images/icons/google.svg" alt="" />
          Google
        </div>
      </div>
    </div>
  );
}
