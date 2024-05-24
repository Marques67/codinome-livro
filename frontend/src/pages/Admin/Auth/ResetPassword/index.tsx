import ButtonIcon from 'components/ButtonIcon';
import { ReactComponent as CL } from 'assets/images/cg-logo-2.svg';

import './styles.css';
import { useForm } from 'react-hook-form';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/requests';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

type PasswordResetDTO = {
  username: string;
  password: string;
  confirmPassword: string;
};

type PasswordResetDTO2 = {
  username: string;
  password: string;
  token: string | null;
};

const ResetPassword = () => {
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');
  const [hasError, setHasError] = useState(false);
  const [mensagem, setMensagem] = useState('As senhas não coincidem');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PasswordResetDTO>();

  const resetPassword = (passwordReset: PasswordResetDTO) => {
    const data: PasswordResetDTO2 = {
      username: passwordReset.username,
      password: passwordReset.password,
      token: token,
    };
    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: '/passwordReset',
      baseURL: BASE_URL,
      data: data,
    };
    axios(config).catch((error) => {
      setHasError(true);
      console.log('ERRO', error);
    });
  };

  const onSubmit = (formData: PasswordResetDTO) => {
    if (token === null) {
      setHasError(true);
      setMensagem('Token inválido ou expirado');
    }
    if (formData.password !== formData.confirmPassword) {
      setHasError(true);
    } else {
      resetPassword(formData);
      setHasError(false);
    }
  };

  if (!token) {
    return (
      <div className="invalid-token-card">
        <h1>Página indisponível</h1>
        <p>Token necessário</p>
      </div>
    );
  } else {
    return (
      <div className="base-card reset-password-card">
        <div className="cg-logo-container">
          <CL />
        </div>
        <h1>RECUPERAÇÃO DE SENHA</h1>
        {hasError && <div className="alert alert-danger">{mensagem}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username', {
                required: 'Campo Obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`form-control base-input ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="mb-2">
            <input
              {...register('password', {
                required: 'Campo Obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.password ? 'is-invalid' : ''
              }`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <div className="mb-2">
            <input
              {...register('confirmPassword', {
                required: 'Campo Obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.confirmPassword ? 'is-invalid' : ''
              }`}
              placeholder="Confirme sua senha"
              name="confirmPassword"
            />
            <div className="invalid-feedback d-block">
              {errors.confirmPassword?.message}
            </div>
          </div>
          <div className="reset-password-submit">
            <ButtonIcon text="Enviar" />
          </div>
        </form>
      </div>
    );
  }
};

export default ResetPassword;
