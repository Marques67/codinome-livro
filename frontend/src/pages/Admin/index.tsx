import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <Route path="/admin/books">
            <h1>Book Crud</h1>
          </Route>
          <Route path="/admin/users">
            <h1>User Crud</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
