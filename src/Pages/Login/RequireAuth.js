import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Looding from "../Share/Looding";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Looding/>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  

  return children;
};
export default RequireAuth;
