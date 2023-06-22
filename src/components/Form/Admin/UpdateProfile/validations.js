import * as yup from "yup";

export default function validation() {
  return yup.object().shape({
    name: yup.string().required('Please enter a name').matches(/^[A-Za-z]+$/, 'Name must contain only alphabetical characters'),
    contact: yup.string().required('Please enter a contact').matches(/^\d{10}$/, 'Contact must be a 10-digit number'),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Id"),
  });
}
