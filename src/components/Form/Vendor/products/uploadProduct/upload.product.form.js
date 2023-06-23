import { useState } from "react";
import { UploadFile, UploadFiles } from "../../../../Antd";
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { selectUser } from "../../../../../redux/AuthSlice/index.slice";
import { Navbar } from "../../../../UiElement";
import { useEffect } from "react";

function UploadProduct({ onSubmit }) {
    const dataOfVendor = useSelector(state => state.vendor);
    const [isEditable, setEditable] = useState(false);
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [discountPercentage, setSiscountPercentage] = useState();
    const [imageIdArray,setImageIdArray] = useState([]);

    function edit(data) {
        onSubmit({ ...data,imageIdArray});
        // setEditable(!isEditable);
        
    }
    return <>
        <Navbar />
        <Formik

            initialValues={
                {
                    title,
                    category,
                    description,
                    brand,
                    price,
                    stock,
                    discountPercentage,
                    file: null,
                    vendorId:1
                }
            }
            enableReinitialize
            onSubmit={edit}
        >
            {
                ({ setFieldValue }) => {
                    return <Form>
                        <div className="page-content page-container mb-5" id="page-content">

                            <div className="padding">

                                <div className="row container ">

                                    <div className="col-xl-6 col-md-3 ">

                                        <div className="card user-card-full">

                                            <div className="row m-l-0 m-r-0">

                                                <div className=" user-profile bg-secondary">

                                                    <div className=" text-center ">
                                                        <h3 className="mb-5 text-primary">Upload Product Pictures</h3>
                                                        <div>
                                                            {/*  imageUrl={imageUrl} setImageUrl={setImageUrl} */}
                                                            <UploadFiles imageIdArray={imageIdArray} setImageIdArray={setImageIdArray} />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="container form-uploader">
                                                    <div className="row p-5 ">
                                                        <div className="col-md-12">
                                                            <label className="upload-label">Category :</label>
                                                            <Field className="upload-feild border d-flex justify-content-end" onChange={(event) => setCategory(event.target.value)} name="category" placeholder="  phones / laptop / camera " />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="upload-label">Title :</label>
                                                            <Field className="upload-feild  border d-flex justify-content-end" name="title" placeholder="  title of product" />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="upload-label">Brand :</label>
                                                            <Field className="upload-feild  border d-flex justify-content-end" name="brand" placeholder="  brand of product" />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="upload-label">Stock :</label>
                                                            <Field className="border upload-feild  d-flex justify-content-end" name="stock" placeholder="  quantity of product" />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="upload-label">Description :</label>
                                                            <Field className="border upload-feild  d-flex justify-content-end" name="description" placeholder="  description about product" />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="upload-label">Price :</label>
                                                            <Field className="border upload-feild  d-flex justify-content-end" name="price" placeholder="  price in INR" />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label className="upload-label">DiscountPercentage :</label>
                                                            <Field className="border upload-feild  d-flex justify-content-end" name="discountPercentage" placeholder="  discount in %" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-success" type="submit">
                                                submit
                                            </button>
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

export default UploadProduct;