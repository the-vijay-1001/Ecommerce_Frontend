import { Link } from "react-router-dom";

function OtpValid() {
    return <>
        <div className="mt-5 d-flex justify-content-center most-outer p-4" >
            <div class="signup-form blink ">
                <div class="container">
                    <div class="header">
                        <h1>Otp Verification</h1>
                        <p id="dum">Enter the one time password</p>
                        <h5 className="text-danger">SENT TO ********7870</h5>
                    </div>
                    <form>
                        {/* <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2 p-3"> <input class="m-2 text-center form-control " type="text" id="first"  maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> </div> */}
                        <div className="input">
                            <i class="fa-solid fa-key"></i>
                            <input id="validotp" placeholder="Enter Otp">
                            </input>
                        </div>
                        <Link to="/"><input class="signup-btn" type="submit" value="VALIDATE" /></Link>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default OtpValid;