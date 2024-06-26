import { Redirect, Route, Router, Switch } from 'react-router-dom';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Books from 'pages/Book';
import Admin from 'pages/Admin';
import BookDetails from 'pages/BookDetails';
import Auth from 'pages/Admin/Auth';
import history from 'util/history';

const Routes = () => {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/books" exact>
          <Books />
        </Route>
        <Route path="/books/:bookId">
          <BookDetails />
        </Route>
        <Redirect from="/admin/auth" to="/admin/auth/login" exact />
        <Route path="/admin/auth">
          <Auth />
        </Route>
        <Redirect from="/admin" to="/admin/books" exact />
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
