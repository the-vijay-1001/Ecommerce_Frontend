import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

function UserLoginForm({ onSubmit }) {
    return <>
        <Formik
            initialValues={{ email: '', password: '' }}
            enableReinitialize
            onSubmit={onSubmit}
        >
            <Form>
                <div className="d-flex justify-content-center most-outer p-4" >
                    <div className="signup-form blink ">
                        <div className="container">
                            <div className="header">
                                <h1>Signin Your Account</h1>
                                <p id="dum">Get started for free!</p>
                            </div>
                                <div className="input">
                                    <i className="fa-solid fa-envelope"></i>
                                    {/* <input type="email" placeholder="Email" /> */}
                                    <Field type="email" id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="input">
                                    <i className="fa-solid fa-lock"></i>
                                    {/* <input type="password" placeholder="Password" /> */}
                                    <Field type="password" id="password" name="password" placeholder="Password" />
                                </div>
                                <input className="signup-btn" type="submit" value="SIGN IN" />
                            <Link to="/forgotpassword">forgot password ?</Link>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-google"></i>
                            </div>
                            <p id="dum">Do not have an Account <Link to="/signup"> signup</Link> </p>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>

    </>
}


export default UserLoginForm;