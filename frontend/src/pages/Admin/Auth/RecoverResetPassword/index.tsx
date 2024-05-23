import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';
import { ReactComponent as CL } from 'assets/images/cg-logo-2.svg';

import './styles.css';

type EmailProps = {
  email: string;
};

const RecoverResetPassword = ({ email }: EmailProps) => {
  return (
    <div className="base-card recover-reset-card">
      <div className="cg-logo-container">
        <CL />
      </div>
      <h1>VERIFIQUE SEU EMAIL</h1>
      <p>
        Se o endereço de e-mail: {email} estiver cadastrado em nosso sistema,
        você receberá um e-mail com instruções para redefinir sua senha.
      </p>
      <div className="recover-reset-submit">
        <Link to="/admin/auth/login">
          <ButtonIcon text="Voltar" />
        </Link>
      </div>
    </div>
  );
};

export default RecoverResetPassword;
