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
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" className="form-control" placeholder="Ex : xyz@gmail.com" />
                            <ErrorMessage name="email" component="div" className="error err-msg" />
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>


                </Form>
            </Formik>
        </div>
    </>
}
export default AdminForgotPassword;