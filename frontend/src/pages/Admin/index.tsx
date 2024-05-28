import { Switch } from 'react-router-dom';
import Navbar from './Navbar';

import './styles.css';
import Users from './Users';
import PrivateRoute from 'components/PrivateRoute';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/books">
            <h1>Book Crud</h1>
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
