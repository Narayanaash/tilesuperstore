import { useState } from 'react';
import SignBottom from './SignBottom';
import SignHeader from './SignHeader';
import Signin from './Signin';
import Signup from './Signup';

export default function Sign({ setShowSignPopUp, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="sign">
      <div className="sign__inner">
        <SignHeader
          heading={`${showLogin ? 'Login' : 'Register'}`}
          setShowSignPopUp={setShowSignPopUp}
        />
        {showLogin ? (
          <Signin
            setShowLogin={setShowLogin}
            setShowSignPopUp={setShowSignPopUp}
          />
        ) : (
          <Signup
            setShowLogin={setShowLogin}
            setShowSignPopUp={setShowSignPopUp}
          />
        )}
        <SignBottom setUser={setUser} setShowSignPopUp={setShowSignPopUp} />
      </div>
    </div>
  );
}
