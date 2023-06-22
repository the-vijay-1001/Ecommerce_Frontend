import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
function VendorSignupForm({ onSubmit }) {
    return <>
        <Formik
            initialValues={{ email: '', name: '', contact: '', password: ''}}
            enableReinitialize
            onSubmit={onSubmit}
        >
            <Form>
                <div className="d-flex justify-content-center most-outer p-3 mt-5" >
                    <div className="signup-form blink ">
                        <div className="container">
                            <div className="header">
                                <h1>Create an Account</h1>
                                <p id="dum">Get started for free!</p>
                            </div>
                            <div className="input">
                                <i className="fa-solid fa-user"></i>
                                {/* <input type="text" placeholder="Username" /> */}
                                <Field type="text" id="name" name="name" placeholder="Username" />
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
                            <div className="input">
                                <i className="fa-solid fa-address-book"></i>
                                {/* <input type="text" placeholder="Contact" /> */}
                                <Field type="text" id="contact" name="contact" placeholder="Contact" />
                            </div>
                            <input className="signup-btn" type="submit" value="SIGN UP" />
                            <p id="dum">Or sign up with</p>
                            <div className="social-icons">
                                <i className="fa-brands fa-facebook-f"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-google"></i>
                            </div>
                            <p id="dum">Already have an account ? <Link to="/vendor/login">signin</Link></p>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    </>
}

export default VendorSignupForm;