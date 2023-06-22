import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import validation from './validation';
import { Link } from "react-router-dom";
import { UploadFile } from "../../Antd";

function UserDash({ onSubmit }) {

    
    const dataOfVendor = useSelector(state => state.vendor);
    const [email, setEmail] = useState(dataOfVendor.vendorData.email);
    const [isEditable, setEditable] = useState(false);
    const [name, setName] = useState(dataOfVendor.vendorData.name);
    const [contact, setContact] = useState(dataOfVendor.vendorData.contact);
    const [imageUrl, setImageUrl] = useState(dataOfVendor?.vendorData?.profileImageURL);
    function edit(data) {
        setEditable(!isEditable);
        isEditable && onSubmit({...data,profileImageURL:imageUrl});
    }

    useEffect(() => {
        console.log(dataOfVendor.vendorData.data);
    }, [])
    return <>
        <Formik
            initialValues={{ email, name, contact,file:null }}
            enableReinitialize
            onSubmit={edit}
        // validationSchema={validation}
        >
            <Form>
                {/* <aside className="profile-card">
                    <header>
                        <img className="vendorProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uDQ1_sHh3M416jBY8v-t1ZEcYfJktaHrKUrkkhUFHVap0MSSMbrwOJH3-Lt4t7RUqHCnm-eKZ7o&usqp=CAU&ec=48600112" />
                        <p className="mt-4 ">
                            <Field name="name" className="text-center" onChange={(event)=>setName(event.target.value)} disabled={!isEditable} value={name} />
                        </p>
                        <p className="text-center vendorName mt-1">
                            <Field name="email" className="text-center" disabled={!isEditable} value={email}  onChange={(event)=>setEmail(event.target.value)}/>

                        </p>
                        <p className="text-center mt-1">
                            
                            <Field name="text" className="text-center" disabled={!isEditable} value={contact} onChange={(event)=>setContact(event.target.value)}/>
                        </p>
                        <p className="text-center mt-1">
                            <Field name="text" className="text-center" disabled value={dataOfVendor?.vendorData?.role} />
                        </p>


                    </header>

                    <div className="profile-bio d-flex justify-content-end">

                        <button className="btn btn-sm btn-primary" type="submit">
                            {isEditable ? 'Save'
                                : 'Edit'
                            }

                        </button>
                    </div>


                </aside> */}


                <div className="page-content page-container" id="page-content">

                    <div className="padding">

                        <div className="row container ">

                            <div className="col-xl-6 col-md-12 ">

                                <div className="card user-card-full">

                                    <div className="row m-l-0 m-r-0">

                                        <div className="col-sm-4 bg-c-lite-green user-profile bg-secondary">

                                            <div className="card-block text-center ">

                                                <div className="m-b-25 ">
                                                    <UploadFile imageUrl={imageUrl} setImageUrl={setImageUrl} />

                                                </div>

                                                <Field type="text"  name="name" onChange={(e) => setName(e.currentTarget.value)} id="user-name" className="my-input text-center" disabled={!isEditable} value={name} />

                                                <p>{dataOfVendor?.vendorData?.role}</p>

                                                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>

                                            </div>

                                        </div>

                                        <div className="col-sm-8">

                                            <div className="card-block">

                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>

                                                <div className="row">

                                                    <div className="col-sm-6">

                                                        <p className="m-b-10 f-w-600">Email</p>

                                                        <Field type="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)} className="my-input" id="email" disabled={!isEditable} value={email} />

                                                    </div>

                                                    <div className="col-sm-6">

                                                        <p className="m-b-10 f-w-600">Phone</p>

                                                        <Field onChange={(e) => setContact(e.currentTarget.value)} name="contact" className="my-input" type="phone" disabled={!isEditable} value={contact === null || contact === undefined ? "NULL" : contact} />

                                                    </div>

                                                </div>

                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Extraa</h6>

                                                <div className="row">

                                                    <div className="col-sm-6">

                                                        <p className="m-b-10 f-w-600">Status</p>

                                                        <h6 className="ms-1 f-w-800 text-success">{dataOfVendor?.vendorData?.status}</h6>

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
        </Formik>
    </>
}

export default UserDash;