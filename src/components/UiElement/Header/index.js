import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    const dataOfVendor = useSelector(state => state.vendor);
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
            <div className="container-xl">
                <Link className="navbar-brand" to="/">
                    <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" className="h-8" alt="..." />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-lg-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/product-list" className="nav-item nav-link active">Product</Link>
                        <Link to="/" className="nav-item nav-link active">Features</Link>
                        <Link to="/" className="nav-item nav-link active">Pricing</Link>
                    </div>
                    {dataOfVendor && <>
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"> Register </button>
                            <div className="dropdown-menu" style={{minWidth: '120px'}}>
                                <Link className="dropdown-item " to="/signup">User</Link>
                                <Link className="dropdown-item " to="/vendor/signup">Vendor</Link>
                            </div>
                        </div>
                        <div className="dropdown ms-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"> Login </button>
                            <div className="dropdown-menu" style={{minWidth: '120px'}}>
                                <Link className="dropdown-item " to="/login">User</Link>
                                <Link className="dropdown-item " to="/vendor/login">Vendor</Link>
                                <Link className="dropdown-item " to="/admin">Admin</Link>
                            </div>
                        </div>
                    </>}
                    {!dataOfVendor && <>
                        <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                            <Link className="btn btn-sm btn-primary" to="/signout">SignOut</Link>
                        </div>
                    </>
                    }
                    <div className="ms-3">
                        <Link className="btn  btn-sm btn-outline-success" to="/vendor/dash"><i className="fa-solid fa-user"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;