import { ErrorMessage, Field, Form, Formik } from "formik";
import validation from "./validation";
import { Link } from "react-router-dom";
function SignUpForm({ onSubmit }) {
   console.log("onsubmit      ",onsubmit)
  return (
    <>
      <Formik
        initialValues={{ email: '', name: '', contact: '', password: '' }}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <Form>
              <div className="wrapper mt-5">
                <div className="logo">
                  <img
                    src="https://cdn.imgbin.com/16/3/18/imgbin-online-shopping-shopping-cart-logo-e-commerce-market-ZB0j7BGkzwjLHhMxSKi37nGKD.jpg"
                    alt="img"
                  />
                </div> <div className="" style={{ color: 'red', fontSize: 17 }}><ErrorMessage name="name" component="div" /></div>
                <div className="form-field d-flex align-items-center">
                  <span className="far fa-user" />
                  <Field
                    type="text"
                    name="name"
                    id="firstname"
                    placeholder="Name"
                  />
                </div><div className="" style={{ color: 'red', fontSize: 17 }}><ErrorMessage name="email" component="div" /></div>
                <div className="form-field d-flex align-items-center">
                  <span className="far fa-envelope" />
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div><div className="" style={{ color: 'red', fontSize: 17 }}><ErrorMessage name="password" component="div" /></div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key" />
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div><div className="" style={{ color: 'red', fontSize: 17 }}><ErrorMessage name="contact" component="div" /></div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-mobile-alt" />
                  <Field
                    type="text"
                    name="contact"
                    min={0}
                    id="phoneNumber"
                    placeholder="Contact"
                  />
                </div>
                <button className="btn mt-3" type="submit">
                  Regiter
                </button>
                <div className="text-center fs-6">
                  <Link href="#">Forget password?</Link> or <Link to="/login">Login</Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default SignUpForm;
