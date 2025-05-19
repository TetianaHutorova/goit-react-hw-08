import { Field, Form, Formik } from "formik";
import css from "../../pages/RegistrationPage/RegistrationPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    navigate("/contacts");
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <fieldset className={css.fieldset}>
          <label className={css.label}>Name</label>
          <Field
            name="name"
            type="text"
            className={css.input}
            placeholder="Name"
          />
          <label className={css.label}>Email</label>
          <Field
            name="email"
            type="email"
            className={css.input}
            placeholder="Email"
          />
          <label className={css.label}>Password</label>
          <Field
            name="password"
            type="password"
            className={css.input}
            placeholder="Password"
          />
          <div>
            <Link to="/login" className={css.linkHover}>
              Already have an account? Log In here!
            </Link>
          </div>
          <button type="submit" className={css.buttonSubmit}>
            Register
          </button>
        </fieldset>
      </Form>
    </Formik>
  );
}
