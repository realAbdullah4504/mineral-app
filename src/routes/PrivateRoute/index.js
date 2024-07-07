import { Navigate } from "react-router-dom";
import { getCookie } from "services/session/cookies";
import PropTypes from "prop-types";

const useAuth = () => {
  const accessToken = getCookie("token");
  return accessToken ? true : false;
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
