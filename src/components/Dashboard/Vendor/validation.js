import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .test(
        "is-non-numeric",
        "Name should not contain numeric values",
        (value) => {
          if (value) {
            return /^\D*$/.test(value);
          }
          return true;
        }
      )
      .min(3, "Name should be at least 3 characters long")
      .matches(/^[^\s].+[^\s]$/, "Name should not contain spaces"),

    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
      
      contact: yup
      .string()
      .matches(/^\+(?:[0-9]){1,3}[0-9\-]{5,14}$/)
      .required('Phone number is required'),
      
  });
}
