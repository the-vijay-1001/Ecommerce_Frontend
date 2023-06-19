import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Id"),
  });
}
