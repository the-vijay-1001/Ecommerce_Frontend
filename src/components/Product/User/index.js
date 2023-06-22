import { Link } from "react-router-dom";

function Product({products}){
    return <>
    <div className="container mt-5">
                <div className="row">
                {products?.map((product, index) =>
                        <div  key={index} className="col-12 col-md-6 col-lg-4" >
                            <div className="border">
                                <img className="card-img p-3" style={{ height: '300px', width: "65%", borderRadius: ' 20%', margin: 'auto',display: 'block' }} src={product.imageUrl} alt="Vans" />
                                <div className="card-body" style={{ textAlign: 'center' }}>
                                    <h4 style={{ fontWeight: '800' }} className="card-title">{product.title}</h4>
                                    <h6 style={{ fontWeight: '800' }} className="card-subtitle mb-2 text-muted">{product.category}</h6>
                                    <p style={{ fontWeight: '700' }} className="card-text">{product.description.substring(0, 30)} ...</p>
                                    <div className="buy d-flex justify-content-around align-items-center">
                                        <div className="price text-success"><h5 style={{ fontWeight: '950' }} className="mt-4">₹{product.price}</h5></div>
                                        <Link style={{ fontWeight: '800' }} to="/add-to-cart" className="btn btn-primary mt-3"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
    </>
}
export default Product;