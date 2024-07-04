import BookCrudCard from 'pages/Admin/Books/BookCrudCard';
import { LiteraryGenrerEnum } from 'types/book';

import './styles.css';
import { Link } from 'react-router-dom';

const List = () => {
  const book = {
    id: 1,
    name: 'The Lord of the Rings',
    description: 'The lord of the Ring is a fantasy book',
    author: 'J. R. R. Tolkien',
    literaryGenreEnum: [LiteraryGenrerEnum.FANTASY, LiteraryGenrerEnum.HORROR],
    numberOfPages: 1568,
    publishingCompany: 'Harper Collins',
    image:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
    reviews: [
      {
        id: 1,
        note: 4.0,
        opinion: 'Leitura fluída.',
        bookId: 1,
        date: '2020-07-13T20:50:07.123450Z',
        user: {
          id: 1,
          firstName: 'Lucas',
          lastName: 'Marques',
          email: 'lucas@gmail.com',
          roles: [
            {
              id: 1,
              authority: 'ROLE_GUEST',
            },
          ],
        },
      },
    ],
    countReview: 1,
    score: 4.0,
  };

  return (
    <>
      <div className="book-crud-bar-container">
        <Link to={'/admin/books/create'}>
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>

        <div className="base-card book-filter-container">Search Bar</div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-12">
          <BookCrudCard book={book} />
        </div>
        <div className="col-sm-6 col-md-12">
          <BookCrudCard book={book} />
        </div>
        <div className="col-sm-6 col-md-12">
          <BookCrudCard book={book} />
        </div>
      </div>
    </>
  );
};

export default List;
