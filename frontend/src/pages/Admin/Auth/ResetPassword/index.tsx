import ButtonIcon from 'components/ButtonIcon';
import { ReactComponent as CL } from 'assets/images/cg-logo-2.svg';

import './styles.css';
import { useForm } from 'react-hook-form';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/requests';
import { useState } from 'react';

type CredentialsDTO = {
  username: string;
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const [hasError, setHasError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CredentialsDTO>();

  const resetPassword = (credenciais: CredentialsDTO) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/user/reset',
      baseURL: BASE_URL,
      params: {
        username: credenciais.username,
        password: credenciais.password,
      },
    };
    axios(params);
  };

  const onSubmit = (formData: CredentialsDTO) => {
    if (formData.password !== formData.confirmPassword) {
      setHasError(true);
    } else {
      resetPassword(formData);
      setHasError(false);
    }
  };

  return (
    <div className="base-card reset-password-card">
      <div className="cg-logo-container">
        <CL />
      </div>
      <h1>RECUPERAÇÃO DE SENHA</h1>
      {hasError && (
        <div className="alert alert-danger">As senhas não coincidem</div>
      )}
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
            placeholder="Password"
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
            placeholder="ConfirmPassword"
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
};

export default ResetPassword;
