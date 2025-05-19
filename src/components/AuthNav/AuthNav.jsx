import { NavLink } from "react-router-dom";
import css from "../AppBar/AppBar.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={(buildLinkClass)}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
    </div>
  );
}
