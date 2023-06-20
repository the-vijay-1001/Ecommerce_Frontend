import { Link } from "react-router-dom";

function Navbar() {
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
                        <Link to="/" className="nav-item nav-link active">Product</Link>
                        <Link to="/" className="nav-item nav-link active">Features</Link>
                        <Link to="/" className="nav-item nav-link active">Pricing</Link>

                    </div>
                    <div className="navbar-nav ms-lg-4">
                        <Link to="/signup" className="nav-item nav-link">Register</Link>
                    </div>
                    <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                        <Link className="btn btn-sm btn-primary" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;