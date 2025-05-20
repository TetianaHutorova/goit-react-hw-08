import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ children }) {
  const selectorIsLoginned = useSelector(isLoggedIn);
  if (selectorIsLoginned) {
    return <Navigate to="/contacts" />;
  }
  return children;
}
