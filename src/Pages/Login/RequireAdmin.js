import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Looding from "../Share/Looding";

const RequireAdmin = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [admin,adminLoading]=useAdmin(user)
  if (loading || adminLoading) {
    return <Looding/>
  }
  if (!user ||!admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  

  return children;
};
export default RequireAdmin;
