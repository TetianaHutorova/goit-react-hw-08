import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { isLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function HomePage() {
  const selectorIsLoggenIn = useSelector(isLoggedIn);
  return (
    <>
      <h1>Welcome to ConnectSphere</h1>
      <p>
        Your ultimate destination to keep all your contacts organized and
        accessible anytime, anywhere.
      </p>

      <h2>Manage Your Connections Effortlessly</h2>
      <p>
        At ConnectSphere, we believe relationships matter. Our platform is
        designed to make managing your personal and professional contacts
        simple, secure, and seamless.
      </p>

      {!selectorIsLoggenIn && (
        <>
          <h2>Why Join Us?</h2>
          <ul>
            <li>
              Organized Contact Book: Keep all your connections in one place,
              neatly categorized and easy to search.
            </li>
            <li>
              Secure & Reliable: Your data is protected with state-of-the-art
              encryption.
            </li>
            <li>
              Always Accessible: Access your contact list from any device, at
              any time.
            </li>
          </ul>
          <div>
            <h2>Get Started Today!</h2>
            <p>
              <Link to="/register" className={css.registLink}>
                Register
              </Link>{" "}
              now to unlock the full potential of your Contact Book.
            </p>

            <p>
              <Link to="/login" className={css.registLink}>
                Sign Up
              </Link>{" "}
              and take the first step toward better connection management.
            </p>
          </div>
        </>
      )}
    </>
  );
}
