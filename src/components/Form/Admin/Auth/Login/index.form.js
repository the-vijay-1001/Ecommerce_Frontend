import { ErrorMessage, Field, Formik, Form } from "formik"
import validation from "./validations";
import { ToastContainer } from "react-toastify";

const AdminLoginForm = ({ onSubmit ,children}) => {

    return <>

        <div id="login-container">
        <ToastContainer/>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validation()}
                onSubmit={onSubmit}
                enableReinitialize
            >
                <Form>

                    <div className="my-form-container" >
                        <h1>Sign In</h1>
                        <hr />
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" className="form-control" placeholder="Ex : xyz@gmail.com" />
                            <ErrorMessage name="email" component="div" className="error err-msg" />
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" id="password" className="form-control" name="password" placeholder="Ex : Abc@123" />
                            <ErrorMessage name="password" component="div" className="error err-msg" />
                            {children}
                            <button className="btn btn-primary" type="submit">Submit</button>

                        </div>
                    </div>


                </Form>
            </Formik>
        </div>
    </>
}
export default AdminLoginForm;