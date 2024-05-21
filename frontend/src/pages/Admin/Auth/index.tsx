import { ReactComponent as AuthImage } from 'assets/images/Computer login.svg';
import { Route, Switch } from 'react-router-dom';

import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Faça suas avaliações com o Codinome Livros</h1>
        <p>Avalie, receba sugestões, mergulhe em novas histórias!</p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <h1>Card de Login</h1>
          </Route>
          <Route path="/admin/auth/signup">
            <h1>Card de SignUp</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>Card de Recover</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
