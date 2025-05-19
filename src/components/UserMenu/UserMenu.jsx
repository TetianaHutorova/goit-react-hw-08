import { useDispatch, useSelector } from "react-redux";
import { userName } from "../../redux/auth/selectors";
import css from "../AppBar/AppBar.module.css";
import { logout } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const selectorUserName = useSelector(userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <p>Welcome, {selectorUserName}</p>
      <button className={css.btnLogOut} onClick={handlerClick}>
        Log out
      </button>
    </>
  );
}
