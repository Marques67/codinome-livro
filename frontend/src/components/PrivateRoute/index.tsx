import { Redirect, Route } from 'react-router-dom';
import { Role, hasAnyRoles, isAuthenticated } from 'util/auth';

type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/admin/auth/login',
              state: { from: location },
            }}
          />
        ) : !hasAnyRoles(roles) ? (
          <Redirect to="/admin/books" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;
