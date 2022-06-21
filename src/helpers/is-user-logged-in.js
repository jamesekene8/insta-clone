import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function IsUserLoggedIn({ user, children, loggedInPath, path }) {
  return user ? <Navigate to={`${loggedInPath}`} /> : children;
}
