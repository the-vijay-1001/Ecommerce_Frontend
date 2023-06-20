import { Link } from "react-router-dom";

function OtpValid() {
    return <>
        <div className="mt-5 d-flex justify-content-center most-outer p-4" >
            <div className="signup-form blink ">
                <div className="container">
                    <div className="header">
                        <h1>Otp Verification</h1>
                        <p id="dum">Enter the one time password</p>
                        <h5 className="text-danger">SENT TO ********7870</h5>
                    </div>
                    <form>
                        {/* <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2 p-3"> <input className="m-2 text-center form-control " type="text" id="first"  maxlength="1" /> <input className="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> <input className="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div> */}
                        <div className="input">
                            <i className="fa-solid fa-key"></i>
                            <input id="validotp" placeholder="Enter Otp">
                            </input>
                        </div>
                        <Link to="/"><input className="signup-btn" type="submit" value="VALIDATE" /></Link>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default OtpValid;