import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ addNewUser }) {
  const handleSubmit = (values, actions) => {
    addNewUser({...values,id:nanoid()});
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
         name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="div" />
        <label className={css.label}>Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage className={css.error} name="number" component="div" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
