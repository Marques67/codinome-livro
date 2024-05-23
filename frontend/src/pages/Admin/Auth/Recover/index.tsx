import { Link } from 'react-router-dom';
import { ReactComponent as CL } from 'assets/images/cg-logo-2.svg';

import './styles.css';
import { useForm } from 'react-hook-form';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/requests';
import ButtonIcon from 'components/ButtonIcon';

type EmailDTO = {
  email: string;
};

type UpdateEmailFunction = (newEmail: string) => void;

interface RecoverProps {
  updateEmail: UpdateEmailFunction;
}

const Recover: React.FC<RecoverProps> = ({ updateEmail }) => {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<EmailDTO>();

  const handleEmailChange = (email: string) => {
    setValue('email', email);
    updateEmail(email);
  };

  const resetPassword = (email: string) => {
    console.log('Email é ' + email);
    const a: AxiosRequestConfig = {
      method: 'POST',
      url: '/email/sending-email',
      baseURL: BASE_URL,
      params: {
        email: email,
      },
    };
    axios(a);
  };

  const handleResetPassword = () => {
    const obj: EmailDTO = {
      email: getValues('email'),
    };
    resetPassword(obj.email);
  };

  return (
    <div className="base-card recover-card">
      <div className="cg-logo-container">
        <CL />
      </div>
      <h1>RECUPERAÇÃO DE SENHA</h1>
      <form>
        <div className="mb-4">
          <input
            {...register('email', {
              required: 'Campo Obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.email ? 'is-invalid' : ''
            }`}
            placeholder="Email"
            name="email"
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          <div className="invalid-feedback d-block">
            {errors.email?.message}
          </div>
        </div>
        <div className="recover-submit">
          <Link to="/admin/auth/recover/reset" onClick={handleResetPassword}>
            <ButtonIcon text="Enviar" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Recover;
