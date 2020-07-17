import React from "react";
import NavBar from "../molecules/NavBar";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import { register as registerAction } from "../actions";

const Login = ({ user, register }) => {
  return (
    <header>
      <NavBar isInverted />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
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
        onSubmit={({ name, email, password }) => {
          register(name, email, password);
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
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
  register: (name, email, password) =>
    dispatch(registerAction(name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
