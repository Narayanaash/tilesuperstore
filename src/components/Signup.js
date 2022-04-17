import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app } from '../firebase-config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .when('password', {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
  agreeTerms: Yup.boolean().oneOf([true], 'Required'),
});

export default function Signup({ setShowLogin, setShowSignPopUp }) {
  const [formSubmitting, setFormSubmitting] = useState(false);

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          username: '',
          email: '',
          mobile: '',
          password: '',
          confirmPassword: '',
          agreeTerms: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setFormSubmitting(true);
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              toast.success('Registered successfully');
              setTimeout(() => {
                setShowSignPopUp(false);
              }, 3000);
            })
            .catch((error) => {
              if (error.code == 'auth/email-already-in-use') {
                toast.error('Email already exists');
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
                placeholder="Username*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                name="username"
              />
              <div className="input-error">
                {errors.username && touched.username && errors.username}
              </div>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email*"
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
                type="tel"
                placeholder="Mobile no."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
                name="mobile"
              />
              <div className="input-error">
                {errors.mobile && touched.mobile && errors.mobile}
              </div>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password*"
                autoComplete="new-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
              <div className="input-error">
                {errors.password && touched.password && errors.password}
              </div>
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password*"
                autoComplete="new-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                name="confirmPassword"
              />
              <div className="input-error">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </div>
            </div>
            <div className="relative">
              <label className="sign__checkbox">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.agreeTerms}
                  name="agreeTerms"
                />{' '}
                Accept Terms &amp; Privacy policy
              </label>
              <div className="input-error">
                {errors.agreeTerms && touched.agreeTerms && errors.agreeTerms}
              </div>
            </div>
            <button
              className="btn btn--blue"
              type="submit"
              disabled={isSubmitting}
            >
              {formSubmitting ? (
                <img src="images/icons/spinner.gif" alt="" />
              ) : (
                'Register'
              )}
            </button>
          </form>
        )}
      </Formik>
      <div className="sign__already text-center">
        Already have an account?{' '}
        <Link to="" className="text-blue" onClick={() => setShowLogin(true)}>
          Login now
        </Link>
      </div>
    </>
  );
}
