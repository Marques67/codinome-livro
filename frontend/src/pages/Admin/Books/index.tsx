import { Route, Switch } from 'react-router-dom';
import List from './List';
import Form from './Form';

const Books = () => {
  return (
    <Switch>
      <Route path="/admin/books" exact>
        <List />
      </Route>
      <Route path="/admin/books/:bookId">
        <Form />
      </Route>
    </Switch>
  );
};

export default Books;
