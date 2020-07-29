import React from "react";
import NavBar from "../molecules/NavBar";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import { register as registerAction } from "../actions";

const Register = ({ user, register, history }) => {
  return (
    <header>
      <NavBar isInverted />
      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={({ fullName, email, password }) => {
          register(fullName, email, password, history);
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
          /* and other goodies */
        }) => {
          if (user) {
            return <Redirect to="/" />;
          }
          return (
            <section>
              <h1>Register an account</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            </section>
          );
        }}
      </Formik>
    </header>
  );
};

const mapStateToProps = ({ user = null }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  register: (fullName, email, password, history) =>
    dispatch(registerAction(fullName, email, password, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
