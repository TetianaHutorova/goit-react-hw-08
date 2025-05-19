import { Field, Form, Formik } from "formik";
import css from "../../pages/LoginPage/LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    navigate("/contacts");
    options.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <fieldset className={css.fieldset}>
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
            <Link to="/register" className={css.linkHover}>
              You don't have an account? Sign UP!
            </Link>
          </div>
          <button type="submit" className={css.buttonSubmit}>
            Login
          </button>
        </fieldset>
      </Form>
    </Formik>
  );
}
