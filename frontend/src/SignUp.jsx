import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios  from "axios";

export default function SignUp() {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters"),
    secondname: Yup.string()
      .required("Second name is required")
      .min(2, "Second name must be at least 2 characters")
      .max(50, "Second name cannot exceed 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phonenumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    profilephoto: Yup.mixed().required("Profile photo is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password must contain uppercase, lowercase, number, and special character"
      ),
    confirmpassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    status : Yup.string()
            .required("Status is required"),
  });

  const initialValues = {
    firstname: "",
    secondname: "",
    email: "",
    phonenumber: "",
    profilephoto: null,
    password: "",
    confirmpassword: "",
    status : ""
  };

  const handleSubmit = (values) => {
      axios.post("http://localhost:3003/user/reactsignup",{
          firstname : values.firstname,
          lastname : values.secondname,
          phonenumber: values.phonenumber,
          profilephoto : values.profilephoto,
          status : values.status,
          email : values.email
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="mb-3">
                <label><strong>First Name</strong></label>
                <Field
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                  className="form-control rounded-0"
                />
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <div className="mb-3">
                <label><strong>Second Name</strong></label>
                <Field
                  type="text"
                  name="secondname"
                  placeholder="Enter Second Name"
                  className="form-control rounded-0"
                />
                <ErrorMessage
                  name="secondname"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <div className="mb-3">
                <label><strong>Email</strong></label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control rounded-0"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <div className="mb-3">
                <label><strong>Phone Number</strong></label>
                <Field
                  type="text"
                  name="phonenumber"
                  placeholder="Enter Phone Number"
                  className="form-control rounded-0"
                />
                <ErrorMessage
                  name="phonenumber"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <div className="mb-3">
                <label><strong>Profile Photo</strong></label>
                <input
                  type="file"
                  className="form-control rounded-0"
                  
                  onChange={(event) =>
                    setFieldValue("profilephoto", event.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="profilephoto"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <div className="mb-3">
                <label><strong>Password</strong></label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control rounded-0"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <div className="mb-3">
                <label><strong>Confirm Password</strong></label>
                <Field
                  type="password"
                  name="confirmpassword"
                  placeholder="Enter Confirm Password"
                  className="form-control rounded-0"
                />
                <ErrorMessage
                  name="confirmpassword"
                  component="div"
                  className="text-danger small"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  <strong>Status</strong>
                </label>
                <Field
                  as="select"
                  id="status"
                  name="status"
                  className="form-control rounded-0"
                >
                  <option>Please select the status</option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-danger small"
                />
              </div>

              <button type="submit" className="btn btn-success w-100 rounded-0">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
