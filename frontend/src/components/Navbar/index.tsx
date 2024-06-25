import { Link, NavLink } from 'react-router-dom';
import './styles.css';
import 'bootstrap/js/src/collapse';
import { ReactComponent as CgLogo } from 'assets/images/cg-logo-2.svg';
import { ReactComponent as Login } from 'assets/images/login.svg';
import { ReactComponent as Logout } from 'assets/images/logout.svg';
import { getTokenData, isAuthenticated } from 'util/auth';
import { useContext, useEffect } from 'react';
import { getAuthData, removeAuthData } from 'util/storage';
import history from 'util/history';
import { AuthContext } from 'AuthContext';

const NavBar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-log-text">
          <CgLogo />
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
        <div className="nav-login-logout">
          {authContextData.authenticated ? (
            <>
              <div className="login-logout-navbar">
                <span className="nav-username">
                  Olá, {getAuthData().userFirstName}!
                </span>

                <a href="#logout" onClick={handleLogoutClick}>
                  SAIR
                </a>
                <Logout />
              </div>
            </>
          ) : (
            <Link to="/admin/auth" className="login-logout-navbar">
              ENTRAR
              <Login />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
