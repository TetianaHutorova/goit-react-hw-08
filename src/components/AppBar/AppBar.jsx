 import css from "../AppBar/AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import { isLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const selectorIsLoggenIn = useSelector(isLoggedIn);

  return (
    <div className={css.app}>
      <Navigation />
      {selectorIsLoggenIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
