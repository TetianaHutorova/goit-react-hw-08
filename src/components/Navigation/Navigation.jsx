import { NavLink } from "react-router-dom";
import css from "../AppBar/AppBar.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
 
export default function Navigation() {
  const selectorIsLoggenIn = useSelector(isLoggedIn);

  return (
    <div className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {selectorIsLoggenIn && (
        <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
      )}
    </div>
  );
}
