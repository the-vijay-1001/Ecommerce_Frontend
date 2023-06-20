import { Link } from "react-router-dom";

function Forgot() {
    return <>
        <div className="mt-5 d-flex justify-content-center most-outer p-4" >
            <div className="signup-form blink ">
                <div className="container">
                    <div className="header">
                        <h1>Forgot Password</h1>
                        <p id="dum">you can reset your password</p>
                    </div>
                    <form>
                        <div className="input">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                         <Link to="/otp"><input class="signup-btn" type="submit" value="SEND OTP" /></Link>
                    </form>
                    <p id="dum">secure way for reseting password</p>
                </div>
            </div>
        </div>
    </>
}

export default Forgot;