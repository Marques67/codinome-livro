import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import Books from 'pages/Book';
import Admin from 'pages/Admin';
import BookDetails from 'pages/BookDetails';

const Routes = () => {
  return (
    <BrowserRouter>
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
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
