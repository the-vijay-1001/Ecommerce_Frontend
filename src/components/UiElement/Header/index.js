import { Link } from "react-router-dom";

function Navbar() {
    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
            <div class="container-xl">
                <Link class="navbar-brand" to="/">
                    <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" class="h-8" alt="..." />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-lg-auto">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/" class="nav-item nav-link active">Product</Link>
                        <Link to="/" class="nav-item nav-link active">Features</Link>
                        <Link to="/" class="nav-item nav-link active">Pricing</Link>

                    </div>
                    <div class="navbar-nav ms-lg-4">
                        <Link to="/vendor/signup" class="nav-item nav-link">Register</Link>
                    </div>
                    <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
                        <Link class="btn btn-sm btn-primary" to="/vendor/login">Login</Link>
                    </div>
                    <div class="ms-3">
                        <Link class="btn  btn-sm btn-outline-success" to="/vendor/dash"><i class="fa-solid fa-user"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;