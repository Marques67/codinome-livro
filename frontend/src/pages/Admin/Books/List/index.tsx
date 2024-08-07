import BookCrudCard from 'pages/Admin/Books/BookCrudCard';
import { Book } from 'types/book';

import './styles.css';
import { Link } from 'react-router-dom';
import { SpringPage } from 'types/vendor/spring';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

const List = () => {
  const [page, setPage] = useState<SpringPage<Book>>();

  const getBooks = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/books',
      params: {
        //page: pageNumber,
        size: 12,
      },
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="book-crud-container">
      <div className="book-crud-bar-container">
        <Link to={'/admin/books/create'}>
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
        <div className="base-card book-filter-container">Search Bar</div>
      </div>
      <div className="row">
        {page?.content.map((book) => (
          <div key={book.id} className="col-sm-6 col-md-12">
            <BookCrudCard book={book} onDelete={() => getBooks()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
