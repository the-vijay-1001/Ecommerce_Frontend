import { ForgotPaaword, OtpValidataion, VendorSignup, UserDash, VendorLogin } from "../../../pages";
import routesMap from "../../../routeControl/userRouteMap";

export default function route() {
    return [
        {
            path: routesMap.LOGIN.path,
            name: "Login",
            key: routesMap.LOGIN.path,
            commonRoute: false,
            private: false,
            element: <VendorLogin />
        },
        {
            path: routesMap.SIGNUP.path,
            name: "Sign Up",
            key: routesMap.SIGNUP.path,
            commonRoute: false,
            private: false,
            element: <VendorSignup />,
        },
        {
            path: routesMap.OTP.path,
            name: "Otp Valid",
            key: routesMap.OTP.path,
            commonRoute: false,
            private: false,
            element: <OtpValidataion />,
        },
        {
            path: routesMap.FORGOT.path,
            name: "Otp Valid",
            key: routesMap.FORGOT.path,
            commonRoute: false,
            private: false,
            element: <ForgotPaaword />,
        },
        {
            path: routesMap.DASHBOARD.path,
            name: "vendor dash",
            key: routesMap.DASHBOARD.path,
            commonRoute: false,
            private: false,
            element: <UserDash />,
        }
    ]
}