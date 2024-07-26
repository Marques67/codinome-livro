import { useForm } from 'react-hook-form';
import './styles.css';
import { Book } from 'types/book';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>();

  const onSubmit = (formData: Book) => {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/books',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="book-crud-container">
      <div className="base-card book-crud-form-card">
        <h1 className="book-crud-form-title">Dados do livro</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row book-crud-inputs-container">
            <div className="col-lg-6 book-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register('name', {
                    required: 'Campo Obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome do Livro"
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div>
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  name=""
                  rows={10}
                  className="form-control base-input h-auto"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="book-crud-form-buttons-container">
            <button className="btn btn-outline-danger book-crud-button">
              CANCELAR
            </button>
            <button className="btn btn-primary book-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
