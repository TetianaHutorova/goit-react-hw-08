 import { Link } from "react-router-dom";
 import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {


  return (
    <div className={css.hero}>
      <div className={css.heroContent}>
        <div className={css.textSection}>
          <h1 className={css.title}>Register now!</h1>
          <p className={css.description}>
            Access your personal contact book, manage your connections, and stay
            organized. It's quick, secure, and hassle-free!
          </p>
        </div>
        <div className={css.card}>
          <div className={css.cardBody}>
{            <RegistrationForm />
}            <div className={css.divider}></div>
            <Link className={css.backToHome} to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
