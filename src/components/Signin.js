import { Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SigninSchema = Yup.object().shape({
  email:
    Yup.string()
      .min(6, 'Too short!')
      .max(20, 'Too long!')
      .required('Required') ||
    Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function Signin({ setShowLogin, setShowSignPopUp }) {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const auth = getAuth();

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFormSubmitting(true);
          signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              toast.success('Logged in successfully');
              setTimeout(() => {
                setShowSignPopUp(false);
              }, 3000);
            })
            .catch((error) => {
              if (
                error.code == 'auth/user-not-found' ||
                error.code == 'auth/wrong-password'
              ) {
                toast.error('Email or password is wrong!');
              }
            })
            .finally(() => {
              setFormSubmitting(false);
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="sign__form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              <div className="input-error">
                {errors.email && touched.email && errors.email}
              </div>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
              <div className="input-error">
                {errors.password && touched.password && errors.password}
              </div>
            </div>
            <label className="sign__checkbox justify-between">
              <div>
                <input type="checkbox" />
                Remember Me
              </div>
              <Link to="">Forgot Password?</Link>
            </label>
            <button
              className="btn btn--blue"
              type="submit"
              disabled={isSubmitting}
            >
              {formSubmitting ? (
                <img src="images/icons/spinner.gif" alt="" />
              ) : (
                'Login'
              )}
            </button>
          </form>
        )}
      </Formik>
      <div className="sign__already text-center">
        New to Tilesuperstore?
        <br />
        <Link to="" className="text-blue" onClick={() => setShowLogin(false)}>
          Create an account
        </Link>
      </div>
    </>
  );
}
