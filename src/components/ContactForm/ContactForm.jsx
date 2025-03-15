import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ addNewUser }) {
  const handleSubmit = (values, actions) => {
    addNewUser(values);
    actions.resetForm();
  };
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be min 3 chars")
      .max(50, "Must be min 50 chars")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Must be min 3 chars")
      .max(50, "Must be min 50 chars")
      .required("This field is required"),
  });
  return (
    <Formik
      initialValues={{
        id: nanoid(),
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <label>Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
