import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

function VendorLoginForm({ onSubmit }) {
    return <>
        <Formik
            initialValues={{ email: '', password: '' }}
            enableReinitialize
            onSubmit={onSubmit}
        >
            <Form>
                <div className="d-flex justify-content-center most-outer p-4" >
                    <div class="signup-form blink ">
                        <div class="container">
                            <div class="header">
                                <h1>Signin Your Account</h1>
                                <p id="dum">Get started for free!</p>
                            </div>
                                <div class="input">
                                    <i class="fa-solid fa-envelope"></i>
                                    {/* <input type="email" placeholder="Email" /> */}
                                    <Field type="email" id="email" name="email" placeholder="Email" />
                                </div>
                                <div class="input">
                                    <i class="fa-solid fa-lock"></i>
                                    {/* <input type="password" placeholder="Password" /> */}
                                    <Field type="password" id="password" name="password" placeholder="Password" />
                                </div>
                                <input class="signup-btn" type="submit" value="SIGN IN" />
                            <Link to="/forgotpassword">forgot password ?</Link>
                            <div class="social-icons">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-google"></i>
                            </div>
                            <p id="dum">Do not have an Account ? <Link to="/vendor/signup"> signup</Link> </p>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>

    </>
}


export default VendorLoginForm;