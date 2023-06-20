import { ErrorMessage, Field, Form, Formik } from "formik";
import validation from "./validation";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
function LoginForm({onSubmit}) {
  const initialValues = {
    email: "",
    password: ""
  };
  return (
    <>
      <Formik
      initialValues={{...initialValues}}
      validationSchema={validation()}
      onSubmit={onSubmit}>
        {(props) => {
          return (
            <Form>
              <div className="wrapper mt-5">
                <div className="logo">
                  <img
                    src="https://cdn.imgbin.com/16/3/18/imgbin-online-shopping-shopping-cart-logo-e-commerce-market-ZB0j7BGkzwjLHhMxSKi37nGKD.jpg"
                    alt="img"
                  />
                </div><div className="" style={{color:'red',fontSize:17}}><ErrorMessage name="email" component="div" /></div>
                <div className="form-field d-flex align-items-center">
                  <span className="far fa-user" />
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div><div className="" style={{color:'red',fontSize:17}}><ErrorMessage name="password" component="div" /></div>
                <div className="form-field d-flex align-items-center">
                  <span className="fas fa-key" />
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button className="btn mt-3" htmlType="submit" type="submit"> 
                  Login
                </button>
                <div className="text-center fs-6">
                  <Link href="#">Forget password?</Link> or <Link to="/signup">Sign up</Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default LoginForm;
