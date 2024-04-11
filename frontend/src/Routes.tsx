import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from 'components/Navbar';
import Home from 'pages/Home';
import Books from 'pages/Book';
import Admin from 'pages/Admin';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
