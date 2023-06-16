import loadeble from "@loadable/component";

export const LoginForm = loadeble(()=>import("./Login/index.form"));
export const SignupForm = loadeble(()=>import("./Signup/index.form"));
export const OtpValid = loadeble(()=>import("./Otp/index.form"));
export const ForgotPaaword = loadeble(()=>import("./ForgotPaaword/index.form"));