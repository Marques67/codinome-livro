import { NavLink } from 'react-router-dom';
import './styles.css';
import { hasAnyRoles } from 'util/auth';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul className="admin-nav-items-container">
        <li>
          <NavLink to="/admin/books" className="admin-nav-item">
            <p>Livros</p>
          </NavLink>
        </li>
        {hasAnyRoles(['ROLE_ADMIN']) && (
          <li>
            <NavLink to="/admin/users" className="admin-nav-item">
              <p>Usuários</p>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
