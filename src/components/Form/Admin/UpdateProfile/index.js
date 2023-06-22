import { ErrorMessage, Field, Formik, Form } from "formik"
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/AuthSlice/index.slice";
import { useState } from "react";
import { UploadFile } from "../../../Antd";


const AdminUpdateProfile = ({ onSubmit, children }) => {
    const user = useSelector(selectUser)

    const [isEditable, setEditable] = useState(false);
    const [email , setEmail] = useState(user?.email);
    const [name , setName] = useState(user?.name);
    const [contact , setContact] = useState(null);
    const [imageUrl, setImageUrl] = useState(user.profileImageURL);

    function edit(data) {
        console.log(data)
        isEditable && onSubmit({...data,profileImageURL:imageUrl});
        setEditable(!isEditable);
    }

    return <>
        <Formik

            initialValues={
                {
                    name,
                    email,
                    contact,
                    file:null
                }

            }
            enableReinitialize
            onSubmit={edit}
        >
            {
                ({ setFieldValue }) => {
                    return <Form>
                        <div className="page-content page-container" id="page-content">

                            <div className="padding">

                                <div className="row container ">

                                    <div className="col-xl-6 col-md-12 ">

                                        <div className="card user-card-full">

                                            <div className="row m-l-0 m-r-0">

                                                <div className="col-sm-4 bg-c-lite-green user-profile bg-secondary">

                                                    <div className="card-block text-center ">

                                                        <div className="m-b-25">
                                                            <UploadFile imageUrl={imageUrl} setImageUrl={setImageUrl}  />

                                                        </div>

                                                        <Field type="text" name="name" onChange={(e)=>setName(e.currentTarget.value)}  id="user-name" className="my-input"  disabled={!isEditable} value={name} />

                                                        <p>{user?.role}</p>

                                                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>

                                                    </div>

                                                </div>

                                                <div className="col-sm-8">

                                                    <div className="card-block">

                                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>

                                                        <div className="row">

                                                            <div className="col-sm-6">

                                                                <p className="m-b-10 f-w-600">Email</p>

                                                                <Field type="email" name="email" onChange={(e)=>setEmail(e.currentTarget.value)} className="my-input"  id="email"   disabled={!isEditable}  value={email} />

                                                            </div>

                                                            <div className="col-sm-6">

                                                                <p className="m-b-10 f-w-600">Phone</p>

                                                                <Field onChange={(e)=>setContact(e.currentTarget.value)} name="contact"  className="my-input" type="phone"  disabled={!isEditable} value={ contact===null || contact === undefined  ? "NULL"  : contact} />

                                                            </div>

                                                        </div>

                                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Extraa</h6>

                                                        <div className="row">

                                                            <div className="col-sm-6">

                                                                <p className="m-b-10 f-w-600">Status</p>

                                                                <h6 className="ms-1 f-w-800 text-success">{user.status}</h6>

                                                            </div>

                                                            <div className="col-sm-6">

                                                            </div>

                                                        </div>

                                                        <div className="signout d-flex justify-content-end">

                                                            <button className="btn btn-sm btn-primary" type="submit">
                                                                {isEditable ? 'Save'
                                                                    : 'Edit'
                                                                }

                                                            </button>

                                                            <button  className="btn btn-sm btn-outline-danger ms-3">

                                                                Sign Out

                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </Form>
                }
            }
        </Formik>
    </>
}
export default AdminUpdateProfile;