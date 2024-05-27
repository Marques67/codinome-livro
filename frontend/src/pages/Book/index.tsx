import BookCard from 'components/BookCard';
import { Link } from 'react-router-dom';
import { Book } from 'types/book';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';

import './styles.css';
import CardLoader from './CardLoader';

const Books = () => {
  const [page, setPage] = useState<SpringPage<Book>>();
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/books',
      params: {
        page: pageNumber,
        size: 12,
      },
    };
    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBooks(0);
  }, []);

  return (
    <div className="container my-4 book-container">
      <div className="row book-title-container">
        <h1>Lista de livros</h1>
      </div>
      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((book) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={book.id}>
              <Link to={`/books/${book.id}`}>
                <BookCard book={book} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Books;
