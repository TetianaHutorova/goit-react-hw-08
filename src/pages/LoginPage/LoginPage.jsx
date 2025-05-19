 import { Link } from "react-router-dom";
 import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {

  return (
    <div className={css.hero}>
      <div className={css.heroContent}>
        <div className={css.textSection}>
          <h1 className={css.title}>Login now!</h1>
          <p className={css.description}>
            Access your personal contact book, manage your connections, and stay
            organized. It's quick, secure, and hassle-free!
          </p>
        </div>
        <div className={css.card}>
          <div className={css.cardBody}>
            {<LoginForm/>}
            <div className={css.divider}></div>
            <Link className={css.backToHome} to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
