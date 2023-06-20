import { ErrorMessage, Field, Formik, Form } from "formik"
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/AuthSlice/index.slice";
import { useState } from "react";

const AdminUpdateProfile = ({ onSubmit, children }) => {
    const user = useSelector(selectUser)

    const [isEditable, setEditable] = useState(false);
    const [email , setEmail] = useState(user?.email);
    const [name , setName] = useState(user?.name);
    const [contact , setContact] = useState(null);

    function edit(data) {
        isEditable && onSubmit(data);
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
                        <div class="page-content page-container" id="page-content">

                            <div class="padding">

                                <div class="row container ">

                                    <div class="col-xl-6 col-md-12 ">

                                        <div class="card user-card-full">

                                            <div class="row m-l-0 m-r-0">

                                                <div class="col-sm-4 bg-c-lite-green user-profile bg-secondary">

                                                    <div class="card-block text-center ">

                                                        <div class="m-b-25">
                                                            <img src={user.profileImageURL ? user.profileImageURL : "https://img.icons8.com/bubbles/100/000000/user.png"} class="img-radius" alt="User-Profile-Image" />
                                                            <input onChange={(e) => {setFieldValue('file',e.currentTarget.files[0])}} type="file" />

                                                        </div>

                                                        <Field type="text" name="name" onChange={(e)=>setName(e.currentTarget.value)}  id="user-name" className="my-input"  disabled={!isEditable} value={name} />

                                                        <p>{user?.role}</p>

                                                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>

                                                    </div>

                                                </div>

                                                <div class="col-sm-8">

                                                    <div class="card-block">

                                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>

                                                        <div class="row">

                                                            <div class="col-sm-6">

                                                                <p class="m-b-10 f-w-600">Email</p>

                                                                <Field type="email" name="email" onChange={(e)=>setEmail(e.currentTarget.value)} className="my-input"  id="email"   disabled={!isEditable}  value={email} />

                                                            </div>

                                                            <div class="col-sm-6">

                                                                <p class="m-b-10 f-w-600">Phone</p>

                                                                <Field onChange={(e)=>setContact(e.currentTarget.value)} name="contact"  className="my-input" type="phone"  disabled={!isEditable} value={ contact===null || contact === undefined  ? "NULL"  : contact} />

                                                            </div>

                                                        </div>

                                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Extraa</h6>

                                                        <div class="row">

                                                            <div class="col-sm-6">

                                                                <p class="m-b-10 f-w-600">Status</p>

                                                                <h6 class="ms-1 f-w-800 text-success">{user.status}</h6>

                                                            </div>

                                                            <div class="col-sm-6">

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