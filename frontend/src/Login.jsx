import React from "react";
import { Link } from "react-router-dom";
import { Formik , Form , Field , ErrorMessage} from 'formik';
import * as Yup from "yup";


export default function Login() {
  // ✅ Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
    let initalValues = {
        email : ' ',
        password : ''
    }


    let handleSubmit = (values) => {
        console.log("Form data:", values);
    }
  

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <Formik initialValues={initalValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
            <Form>
                <div className="mb-3">
                    <label htmlFor="email">
                    <   strong>Email</strong>
                    </label>
                    <Field
                    type="email"
                    placeholder="Enter Email"
                    className="form-control rounded-0"
                    name = "email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger small"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <Field
                    type="password"
                    placeholder="Enter Password"
                    className="form-control rounded-0"
                    name = "password"
                    />
                     <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger small"
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Log in
                </button>

                <p className="mt-2 small text-muted">
                    You agree to our terms and conditions
                </p>

                <Link
                    to="/signup"
                    className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                >
                    Create Account
                </Link>
            </Form>
        )}
        </Formik>
      </div>
    </div>
  );
}
