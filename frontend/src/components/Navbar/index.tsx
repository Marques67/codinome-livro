import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import 'bootstrap/js/src/collapse';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-log-text">
          <h4>Codinome Livros</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#codinome-livros-navbar"
          aria-controls="codinome-livros-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="codinome-livros-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                INÍCIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" activeClassName="active">
                LIVROS
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
