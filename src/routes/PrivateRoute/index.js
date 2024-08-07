import { Navigate } from "react-router-dom";
import { logOut } from "utils/helpers";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "services/session/cookies";
import PropTypes from "prop-types";

const useAuth = () => {
  const accessToken = getCookie("token");
    let isExpired = false;
    if (accessToken) {
      const payLoad = jwtDecode(accessToken);
       isExpired = Date.now() > payLoad.exp * 1000;
       if(isExpired){
        logOut();
       }
    }
  return (accessToken && !isExpired) ? true : false;
};

export const PrivateRoute = ({ component: Component, layout: Layout }) => {
  const isAuthenticated = useAuth();
   if (isAuthenticated) {
    return (
      <Layout>
        <Component />
      </Layout>
    );
   }
   return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  layout: PropTypes.any,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
