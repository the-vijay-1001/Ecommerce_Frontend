import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    password: yup.string().required("Password is required"),
    cpassword: yup.string().required("Confirmation is required"),
  });
}
