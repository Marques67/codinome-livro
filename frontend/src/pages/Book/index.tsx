import BookCard from 'components/BookCard';
import { Link } from 'react-router-dom';
import { Book, LiteraryGenrerEnum } from 'types/book';

import './styles.css';
import Pagination from 'components/Pagination';

const Books = () => {
  const book: Book = {
    id: 1,
    description: 'Good',
    name: 'Jogador Nº1',
    author: 'Daniel',
    numberOfPages: 356,
    publishingCompany: 'Aleph',
    countReview: 23,
    score: 4.5,
    reviews: [
      {
        id: 1,
        note: 5,
        opinion: 'Great',
        date: '2024-04-15T10:00:00Z',
        user: {
          id: 1,
          firstName: 'Lucas',
          lastName: 'Marques',
          email: 'lucasmarquesff@hotmail.com',
        },
      },
    ],
    image:
      'https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg',
    literaryGenreEnum: LiteraryGenrerEnum.ADVENTURE,
  };

  return (
    <div className="container my-4 book-container">
      <div className="row book-title-container">
        <h1>Lista de livros</h1>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/books/1">
            <BookCard book={book} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/books/1">
            <BookCard book={book} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/books/1">
            <BookCard book={book} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/books/1">
            <BookCard book={book} />
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/books/1">
            <BookCard book={book} />
          </Link>
        </div>
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Books;
