import { Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users';
import PrivateRoute from 'components/PrivateRoute';
import Books from './Books';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/books">
            <Books />
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
