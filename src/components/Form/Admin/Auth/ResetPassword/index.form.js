import { ErrorMessage, Field, Formik, Form } from "formik"
import validation from "./validations";

const AdminForgotPassword = ({ onSubmit, children }) => {

    return <>

        <div id="login-container">
            <Formik
                initialValues={{
                    email: '',
                }}
                validationSchema={validation()}
                onSubmit={onSubmit}
                enableReinitialize
            >
                <Form>

                    <div className="my-form-container" >
                        <h1>Enter your email</h1>
                        <hr />
                        <div>
                            <label htmlFor="email">New Password:</label>
                            <Field type="password" id="password" className="form-control" name="password" placeholder="Ex : Abc@123" />
                            <ErrorMessage name="password" component="div" className="error err-msg" />
                            <label htmlFor="email">Confirm Password:</label>
                            <Field type="password" id="password" className="form-control" name="password" placeholder="Ex : Abc@123" />
                            <ErrorMessage name="password" component="div" className="error err-msg" />
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>


                </Form>
            </Formik>
        </div>
    </>
}
export default AdminForgotPassword;