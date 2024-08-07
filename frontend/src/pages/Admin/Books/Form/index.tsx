import { useForm } from 'react-hook-form';
import { Book } from 'types/book';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { useHistory, useParams } from 'react-router-dom';

import './styles.css';
import { useEffect } from 'react';

type UrlParams = {
  bookId: string;
};

const Form = () => {
  const { bookId } = useParams<UrlParams>();
  const isEditing = bookId !== 'create';
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Book>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `books/${bookId}` }).then((response) => {
        const book = response.data as Book;
        setValue('name', book.name);
        setValue('author', book.author);
        setValue('numberOfPages', book.numberOfPages);
        setValue('publishingCompany', book.publishingCompany);
        setValue('image', book.image);
        setValue('reviews', book.reviews);
        setValue('description', book.description);
      });
    }
  }, [isEditing, bookId, setValue]);

  const onSubmit = (formData: Book) => {
    const data = {
      ...formData,
      image: isEditing
        ? formData.image
        : 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
    };
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/books/${bookId}` : '/books',
      data,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      history.push('/admin/books');
    });
  };

  const handleCancel = () => {
    history.push('/admin/books');
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
                <input
                  {...register('author', {
                    required: 'Campo Obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome do Autor"
                  name="author"
                />
                <div className="invalid-feedback d-block">
                  {errors.author?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <input
                  {...register('numberOfPages', {
                    required: 'Campo Obrigatório',
                  })}
                  type="number"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Número de páginas"
                  name="numberOfPages"
                />
                <div className="invalid-feedback d-block">
                  {errors.numberOfPages?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <input
                  {...register('publishingCompany', {
                    required: 'Campo Obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Editora"
                  name="publishingCompany"
                />
                <div className="invalid-feedback d-block">
                  {errors.publishingCompany?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  rows={15}
                  {...register('description', {
                    required: 'Campo Obrigatório',
                  })}
                  className={`form-control base-input h-auto ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Descrição"
                  name="description"
                ></textarea>
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>
            </div>
          </div>
          <div className="book-crud-form-buttons-container">
            <button
              className="btn btn-outline-danger book-crud-button"
              onClick={handleCancel}
            >
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
